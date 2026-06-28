# Pforzheim Dashboard: App and Chart Data Guide

This document explains what the Pforzheim dashboard page is and how to update the data behind each chart rendered in `app/(main)/page.tsx`.

## 1) Hand over to another team (own GitHub + Vercel)

Use this when another team should own and maintain the product in their own repository and deployment.

### 1.1 Clone your current project

```bash
git clone https://github.com/alexisxz/smartdashboard-pforzheim.git
cd smartdashboard-pforzheim
```

### 1.2 Disconnect from your repository and connect to yours

Recommended (keep commit history):

```bash
git remote -v
git remote remove origin
git remote add origin <YOURS_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```

Alternative (start as brand-new history):

```bash
rm -rf .git
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <YOURS_GITHUB_REPO_URL>
git push -u origin main
```

### 1.3 Deploy in Vercel

1. Log in to Vercel and click `Add New -> Project`.
2. Import the new GitHub repository (`<YOURS_GITHUB_REPO_URL>`).
3. Keep framework preset as `Next.js`.
4. Add required environment variables before first deploy:
   `NEXT_PUBLIC_DIRECTUS_URL`
   `DIRECTUS_ITEM_STATUS` (for example: `published`)
5. Click `Deploy`.
6. After deployment, open the app URL and verify all tiles/charts render.

### 1.4 Ongoing updates for them

1. They update data files in `assets/data/`.
2. They push commits to their GitHub repository.
3. Vercel auto-deploys on push to the configured branch.

## 2) What this app/page is

The page `app/(main)/page.tsx` is the Pforzheim homepage of the dashboard.  
It renders 3 sections (`climate`, `mobility`, `building`) and mounts these data tiles:

1. `WeatherTile` (`Wetter aktuell`)
2. `ClimateDevelopmentTile` (`Klima`)
3. `ClimateIndicesTile` (`Klimakenntage`)
4. `Dwd` (`Niederschlag`)
5. `StadtradelnTile` (`Stadtradeln`)
6. `Ladesaeulenregister` (`Ladesäulenregister`)
7. `JahresfahrleistungNachFahrzeugart` (`Jahresfahrleistung`)
8. `Melderegister` (`Bevölkerungsentwicklung Haushalte`)

## 3) Quick update workflow

1. Update the corresponding file in `assets/data/` (or API source).
2. Keep the required column/key names unchanged.
3. Start locally with `npm run dev`.
4. Check the affected tile on the homepage.
5. Confirm slider behavior (many charts show only the latest 5 years).

## 4) Chart-by-chart data maintenance

## Wetter aktuell (`WeatherTile`)

- Component: `components/Tiles/Climate/WeatherTile/WeatherTileContent.tsx`
- Data source: BrightSky API via `lib/brightsky.ts`
- Current location: `{ lat: 48.9, lng: 8.74 }` (Pforzheim)
- No local `assets/data` file is used.

How to update:
1. If you need another location, change the coordinates in `WeatherTileContent.tsx`.
2. If condition labels/icons must change, edit `conditionMapping` and `conditionMappingIcon` in `lib/brightsky.ts`.
3. Verify the API still responds: the tile should render live weather and 6-hour slider values.

## Klima (`ClimateDevelopmentTile`)

- Component: `components/Tiles/Climate/Devlopment/index.tsx`
- Data file: `assets/data/climate_history.json`
- Backup of the old Pforzheim monthly data:
  `assets/data/climate_history_backup_pforzheim.json`
- Current chart type: Warming Stripes for Stuttgart, one stripe per year.
- Current source: `showyourstripes.info / University of Reading`
- Used fields per item:
  - `timestamp`
  - `temperature_deviation`
  - `stripe_color` (optional; if present, it is used directly for the stripe)
  - (metadata fields are tolerated: `observation_type`, `location`, `baseline`,
    `source`, `source_url`, `dwd_station_id`, etc.)

How to update:
1. Replace/update `assets/data/climate_history.json` with one record per year.
2. Keep `timestamp` parseable as a date and `temperature_deviation` numeric.
3. Keep years sorted from oldest to newest; the component also sorts defensively.
4. If you have official stripe colors, include `stripe_color` as a hex color.
   Otherwise the component maps `temperature_deviation` to blue/red colors.
5. Reload the page and verify the Warming Stripes chart renders from 1850 to the
   latest available year.

Note:
- The previous Pforzheim monthly climate history is preserved in
  `assets/data/climate_history_backup_pforzheim.json`.
- `scripts/ms-climate-data.sh` still refreshes the old Münster/Pforzheim-style
  `climate_history.json` and `climate_indices.json`. Do not run it for the Klima
  tile unless you intentionally want to replace the Stuttgart Warming Stripes
  data or restore the old chart/data workflow.

## Klimakenntage (`ClimateIndicesTile`)

- Component: `components/Tiles/Climate/ClimateIndices/ClimateIndicesChart.tsx`
- Data file: `assets/data/climate_indices.json`
- Required fields per item:
  - `timestamp` (format expected like `yyyy-MM-dd HH:mm:ssXXX`)
  - `eistage`
  - `frosttage`
  - `heisse_tage`
  - `sommertage`
  - `tropennaechte`

How to update:
1. Replace/update `assets/data/climate_indices.json`.
2. Keep the key names exactly as above.
3. Verify toggles (Heiße Tage, Sommertage, Tropennächte, Frosttage, Eistage) still work.

Optional side info text:
- `ClimateIndicesTile` uses local side info text in
  `components/Tiles/Climate/ClimateIndices/index.tsx`.
- The current text explains that the shown climate indices refer to a DWD
  station in Ispringen, formerly Eutingen, and may vary within Pforzheim
  depending on location and elevation.
- Do not use Directus for this tile's side info text.

## Niederschlag (`Dwd`)

- Component: `components/Tiles/Pforzheim-Charts/Dwd/DwdChart.tsx`
- Data file: `assets/data/dwd.csv`
- Required CSV headers:
  - `Jahr`
  - `Monat`
  - `Niederschlag Monatssumme`
  - `Tage Niederschlag`

How to update:
1. Replace/update `assets/data/dwd.csv`.
2. Keep German month names consistent with:
   `Januar, Februar, März, April, Mai, Juni, Juli, August, September, Oktober, November, Dezember`.
3. Keep precipitation values parseable. German decimal commas are supported:
   `87,6` is parsed as `87.6`, and thousands separators like `1.234,5` are
   parsed as `1234.5`.
4. Verify the tile: bars = precipitation sum, line = rainy days.
5. Keep the visual labels explicit:
   - Legend: `Niederschlag in mm` and `Regentage`
   - Left Y-axis: `Niederschlag in mm`
   - Right Y-axis: `Tage mit Niederschlag`
   - Tooltip: month, precipitation in `mm`, and rainy days in `Tage`

Note:
- The slider automatically uses the latest 5 years found in the CSV.

## Stadtradeln (`StadtradelnTile`)

- Components:
  - `components/Tiles/Mobility/Bicycle/Stadtradeln/ChartContainer.tsx`
  - `components/Tiles/Mobility/Bicycle/Stadtradeln/Chart.tsx`
- Data file: `assets/data/stadtradeln_data.csv`
- Required CSV headers:
  - `key`
  - `name`
  - `year`
  - `value`
- Pforzheim series uses rows where `key = pforzheim`.

How to update:
1. Replace/update `assets/data/stadtradeln_data.csv`.
2. Ensure `pforzheim` rows exist for each year to be displayed.
3. Verify chart + city comparison toggle.

Optional script:
- Run `bash scripts/stadtradeln.sh` to fetch the file from the configured remote source.

## Ladesäulenregister (`Ladesaeulenregister`)

- Component: `components/Tiles/Pforzheim-Charts/Ladesaeulenregister/ChangingStationChart.tsx`
- Data file: `assets/data/ladesaeulenregister.csv`
- Required CSV headers used:
  - `Ort` (must contain `Pforzheim` for included rows)
  - `Inbetriebnahmedatum`
  - `Anzahl Ladepunkte`

How to update:
1. Replace/update `assets/data/ladesaeulenregister.csv`.
2. Keep date values parseable by JS `Date` (invalid dates are skipped).
3. Verify timeline chart shows monthly totals of charging points.

## Jahresfahrleistung (`JahresfahrleistungNachFahrzeugart`)

- Component: `components/Tiles/Pforzheim-Charts/JahresfahrleistungNachFahrzeugart/MileageVehicleChart.tsx`
- Data file: `assets/data/jahresfahrleistung-nach-fahrzeugart.csv`
- Required CSV headers:
  - `Jahr`
  - `Jahres-Fahrleistung Krafträder (in Mill. km)`
  - `Jahres-Fahrleistung Pkw (in Mill. km)`
  - `Jahres-Fahrleistung leichte Nutzfahrzeuge (in Mill. km)`
  - `Jahres-Fahrleistung schwere Nutzfahrzeuge (in Mill. km)`

How to update:
1. Replace/update `assets/data/jahresfahrleistung-nach-fahrzeugart.csv`.
2. Keep numeric values parseable (quoted values like `"1,072"` are supported).
3. Verify the 4 KPI blocks and year slider.

Note:
- Slider shows only the latest 5 years available.

## Bevölkerungsentwicklung Haushalte (`Melderegister`)

- Component: `components/Tiles/Pforzheim-Charts/Melderegister/PopulationRegisterChart.tsx`
- Data file: `assets/data/melderegister.csv`
- Required CSV headers:
  - `Jahr`
  - `Oststadt`
  - `Innenstadt2`
  - `Weststadt`
  - `Südweststadt`
  - `Au`
  - `Südoststadt`
  - `Buckenberg`
  - `Nordstadt`
  - `Brötzingen`
  - `Dillweißenstein`
  - `Würm`
  - `Hohenwart`
  - `Büchenbronn`
  - `Huchenfeld`
  - `Eutingen`

How to update:
1. Replace/update `assets/data/melderegister.csv`.
2. Keep all district columns present, even if values are `0`.
3. Verify treemap and total (`Gesamt`) render correctly.

Note:
- Slider shows latest 5 years only.

## 5) Common pitfalls

1. Renaming CSV headers breaks charts immediately.
2. Invalid dates in date-based charts are silently dropped.
3. Missing `pforzheim` key in STADTRADELN file removes the main series.
4. Adding new years works automatically, but only the latest 5 are selectable in slider-based charts.
