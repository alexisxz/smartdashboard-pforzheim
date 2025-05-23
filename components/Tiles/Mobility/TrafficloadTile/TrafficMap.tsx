'use client'

import AnimatedNumberSVG from '@/components/Elements/Animated/AnimatedNumberSVG'
import { map } from '@/utils/map'
import { animated, useSpring } from '@react-spring/web'
import * as React from 'react'
import { SVGProps } from 'react'

const MIN_RADIUS = 40
const MAX_RADIUS = 100

interface TrafficMapProps extends SVGProps<SVGSVGElement> {
  albersloher: number
  warendorfer: number
  weseler: number
  rishon: number
  steinfurter: number
}

export default function TrafficMap({
  albersloher,
  warendorfer,
  weseler,
  rishon,
  steinfurter,
  ...props
}: TrafficMapProps) {
  const values = Object.values([
    albersloher,
    warendorfer,
    weseler,
    rishon,
    steinfurter,
  ])
  const minValue = Math.min(...values)
  const maxValue = Math.max(...values)

  const albersloherRadius = useSpring({
    val: map(albersloher, minValue, maxValue, MIN_RADIUS, MAX_RADIUS),
    from: { val: 0 },
  })
  const warendorferRadius = useSpring({
    val: map(warendorfer, minValue, maxValue, MIN_RADIUS, MAX_RADIUS),
    from: { val: 0 },
  })
  const weselerRadius = useSpring({
    val: map(weseler, minValue, maxValue, MIN_RADIUS, MAX_RADIUS),
    from: { val: 0 },
  })
  const rishonRadius = useSpring({
    val: map(rishon, minValue, maxValue, MIN_RADIUS, MAX_RADIUS),
    from: { val: 0 },
  })
  const steinfurterRadius = useSpring({
    val: map(steinfurter, minValue, maxValue, MIN_RADIUS, MAX_RADIUS),
    from: { val: 0 },
  })

  return (
    <svg
      fill="none"
      height="586"
      viewBox="0 0 1286 586"
      width="1286"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Pendler_gesamt 1">
        <path
          d="M622.54 16.31L611.49 40.775L581.127 50.264L535.545 0L510.707 10.873V29.9L480.319 39.414L415.425 70.652L411.281 115.48L382.3 135.867L394.731 220.111L329.837 273.094L320.168 317.922L378.156 335.591L361.581 388.574L371.25 436.12L414.044 427.965L425.094 471.458L444.432 517.645L458.245 547.522L489.989 577.422L535.546 585.577L550.74 550.239L575.603 557.039L601.822 538.039L607.347 494.546L654.285 501.346L695.723 516.297L713.678 495.9L683.29 448.354L679.146 426.607L709.534 418.477L767.522 444.277L790.978 437.477L803.409 402.163L826.89 380.416L811.698 350.542L785.454 324.718L777.192 283.968L753.711 252.707L749.567 197.007L777.192 167.13L734.368 91.039L717.793 74.729H687.434L659.809 50.264L622.54 16.31Z"
          fill="#34C17B"
          fillOpacity="0.15"
          id="Stroke_1"
        />
        <path
          d="M305.721 285.443L374.491 295.863L423.44 329.689L492.124 383.22"
          id="Pfad_372"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M544.043 301.513L533.888 292.929V252.291L541.616 243.608"
          id="Pfad_373"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          d="M553.85 4.76501V31.398L557.577 41.113V56.288L553.85 80.428L550.403 182.455V251.003"
          id="Pfad_374"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <g id="Gruppe_472">
          <path
            d="M323.1 78.136C334.719 91.335 345.083 105.589 354.059 120.711C368.743 145.536 401.791 178.131 416.792 181.234C431.794 184.337 441.751 187.322 461.979 190.041C482.206 192.758 488.025 186.732 504.679 204.541C521.332 222.349 549.074 250.962 549.074 250.962L557.961 253.84"
            id="Pfad_365"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            d="M277.049 423.104C277.049 423.104 314.005 437.532 330.577 432.511C347.149 427.49 398.79 402.591 398.79 402.591C398.79 402.591 441.915 391.777 460.821 390.441C479.727 389.105 497.981 388.126 512.604 361.875C527.227 335.623 546.812 300.853 546.812 300.853L558.263 281.806V253.941L590.721 265.762"
            id="Pfad_366"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            d="M727.99 488.449L699.329 455.665H689.204L678.816 414.082L646.452 373.908C646.452 373.908 626.511 343.523 613.998 330.822C601.485 318.121 582.164 296.195 582.164 296.195V284.514L584.206 272.604"
            id="Pfad_367"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            d="M830.653 185.273L817.847 192.874L805.754 208.107H764.121L681.845 228.982L658.945 236.375H644.483L599.813 255.106"
            id="Pfad_368"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
          <path
            d="M557.084 283.653L571.704 284.514L584.685 272.029L600.574 254.75"
            id="Pfad_369"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
          />
        </g>
        <path
          d="M655.086 4.76599L672.272 56.436L663.706 74.312V133.157L655.086 139.773L634.116 197.199L630.65 201.974L624.25 233.074V245.845"
          id="Pfad_371"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <g id="Gruppe_981">
          <animated.circle
            cx="616"
            cy="340"
            data-name="Ellipse 3"
            fill="rgba(52,193,123,0.15)"
            r={albersloherRadius.val.to(val => val)}
          />
          <g id="MS_Klimadashboard_Icons_m_pendler">
            <g id="group">
              <path
                d="M623.562 348.993H607.031C606.571 348.993 606.189 348.611 606.189 348.151C606.189 347.691 606.571 347.31 607.031 347.31H623.562C624.022 347.31 624.404 347.691 624.404 348.151C624.404 348.611 624.022 348.993 623.562 348.993Z"
                fill="#34C17B"
                id="Path"
              />
              <path
                d="M637.175 348.993H632.956C632.495 348.993 632.114 348.611 632.114 348.151C632.114 347.691 632.495 347.31 632.956 347.31H637.175C638.051 347.31 638.758 346.479 638.758 345.469V340.621C638.758 339.094 637.68 337.849 636.356 337.849H629.555C629.14 337.849 628.792 337.557 628.725 337.142L627.905 332.26C626.648 327.782 623.966 327.153 621.261 327.153H606.503C603.047 327.153 598.928 328.859 598.928 337.007C598.928 337.467 598.546 337.849 598.086 337.849C595.898 337.849 594.113 339.869 594.113 342.36V345.391C594.113 346.457 594.854 347.321 595.763 347.321H597.626C598.086 347.321 598.468 347.702 598.468 348.163C598.468 348.623 598.086 349.004 597.626 349.004H595.763C593.923 349.004 592.43 347.388 592.43 345.391V342.36C592.43 339.252 594.529 336.682 597.256 336.233C597.57 326.536 603.787 325.47 606.503 325.47H621.261C624.28 325.47 627.95 326.199 629.544 331.901L630.262 336.165H636.345C638.601 336.165 640.43 338.163 640.43 340.621V345.469C640.43 347.411 638.971 348.993 637.164 348.993H637.175Z"
                fill="#34C17B"
                id="Path-1"
              />
              <path
                d="M602.34 353.202C599.489 353.202 597.11 351.069 596.807 348.23C596.784 348.039 596.773 347.837 596.773 347.624C596.773 344.549 599.276 342.046 602.34 342.046C605.404 342.046 607.906 344.549 607.906 347.624C607.906 347.826 607.895 348.028 607.873 348.219C607.57 351.047 605.19 353.19 602.34 353.19V353.202ZM602.34 343.741C600.196 343.741 598.457 345.492 598.457 347.635C598.457 347.781 598.457 347.916 598.479 348.05C598.692 350.026 600.353 351.518 602.34 351.518C604.326 351.518 605.987 350.026 606.2 348.062C606.212 347.927 606.223 347.781 606.223 347.635C606.223 345.492 604.483 343.741 602.34 343.741Z"
                fill="#34C17B"
                id="Path-2"
              />
              <path
                d="M628.253 353.202C625.403 353.202 623.023 351.069 622.72 348.23C622.698 348.039 622.687 347.837 622.687 347.624C622.687 344.549 625.189 342.046 628.253 342.046C631.317 342.046 633.831 344.549 633.831 347.624C633.831 347.826 633.82 348.028 633.797 348.23C633.494 351.058 631.115 353.19 628.264 353.19L628.253 353.202ZM628.253 343.741C626.11 343.741 624.37 345.492 624.37 347.635C624.37 347.781 624.381 347.916 624.393 348.062C624.606 350.037 626.267 351.518 628.253 351.518C630.24 351.518 631.912 350.026 632.114 348.062C632.125 347.916 632.136 347.781 632.136 347.635C632.136 345.492 630.386 343.741 628.242 343.741H628.253Z"
                fill="#34C17B"
                id="Path-3"
              />
              <path
                d="M625.167 337.276H602.587C602.127 337.276 601.745 336.895 601.745 336.435V334.538C601.745 331.845 603.933 329.656 606.627 329.656H620.936C623.73 329.656 625.997 331.923 625.997 334.718V336.446C625.997 336.906 625.616 337.288 625.156 337.288L625.167 337.276ZM603.44 335.593H624.325V334.706C624.325 332.843 622.81 331.328 620.947 331.328H606.638C604.876 331.328 603.44 332.765 603.44 334.527V335.582V335.593Z"
                fill="#34C17B"
                id="Path-4"
              />
              <path
                d="M614.09 330.666C614.55 330.666 614.932 331.048 614.932 331.508V336.019C614.932 336.48 614.55 336.861 614.09 336.861C613.63 336.861 613.248 336.48 613.248 336.019V331.508C613.248 331.048 613.63 330.666 614.09 330.666Z"
                fill="#34C17B"
                id="Path-5"
              />
            </g>
          </g>
        </g>
        <g id="Gruppe_556">
          <animated.circle
            cx="511"
            cy="276"
            data-name="Ellipse 3"
            fill="rgba(52,193,123,0.15)"
            r={rishonRadius.val.to(val => val)}
          />
          <g id="MS_Klimadashboard_Icons_m_pendler-copy-3">
            <g id="group-1">
              <path
                d="M517.562 284.993H501.031C500.571 284.993 500.189 284.611 500.189 284.151C500.189 283.691 500.571 283.31 501.031 283.31H517.562C518.022 283.31 518.404 283.691 518.404 284.151C518.404 284.611 518.022 284.993 517.562 284.993Z"
                fill="#34C17B"
                id="Path-6"
              />
              <path
                d="M531.175 284.993H526.956C526.495 284.993 526.114 284.611 526.114 284.151C526.114 283.691 526.495 283.31 526.956 283.31H531.175C532.051 283.31 532.758 282.479 532.758 281.469V276.621C532.758 275.095 531.68 273.849 530.356 273.849H523.555C523.14 273.849 522.792 273.557 522.725 273.142L521.905 268.26C520.648 263.782 517.966 263.153 515.261 263.153H500.503C497.047 263.153 492.928 264.859 492.928 273.007C492.928 273.467 492.546 273.849 492.086 273.849C489.898 273.849 488.113 275.869 488.113 278.36V281.391C488.113 282.457 488.854 283.321 489.763 283.321H491.626C492.086 283.321 492.468 283.702 492.468 284.163C492.468 284.623 492.086 285.004 491.626 285.004H489.763C487.923 285.004 486.43 283.388 486.43 281.391V278.36C486.43 275.252 488.529 272.682 491.256 272.233C491.57 262.536 497.788 261.47 500.503 261.47H515.261C518.28 261.47 521.95 262.199 523.544 267.901L524.262 272.165H530.345C532.601 272.165 534.43 274.163 534.43 276.621V281.469C534.43 283.411 532.971 284.993 531.164 284.993H531.175Z"
                fill="#34C17B"
                id="Path-7"
              />
              <path
                d="M496.34 289.202C493.489 289.202 491.11 287.069 490.807 284.23C490.784 284.039 490.773 283.837 490.773 283.624C490.773 280.549 493.276 278.046 496.34 278.046C499.404 278.046 501.906 280.549 501.906 283.624C501.906 283.826 501.895 284.028 501.873 284.219C501.57 287.047 499.19 289.19 496.34 289.19V289.202ZM496.34 279.741C494.196 279.741 492.457 281.492 492.457 283.635C492.457 283.781 492.457 283.916 492.479 284.05C492.692 286.026 494.353 287.518 496.34 287.518C498.326 287.518 499.987 286.026 500.2 284.062C500.212 283.927 500.223 283.781 500.223 283.635C500.223 281.492 498.483 279.741 496.34 279.741Z"
                fill="#34C17B"
                id="Path-8"
              />
              <path
                d="M522.253 289.202C519.403 289.202 517.023 287.069 516.72 284.23C516.698 284.039 516.687 283.837 516.687 283.624C516.687 280.549 519.189 278.046 522.253 278.046C525.317 278.046 527.831 280.549 527.831 283.624C527.831 283.826 527.82 284.028 527.797 284.23C527.494 287.058 525.115 289.19 522.264 289.19L522.253 289.202ZM522.253 279.741C520.11 279.741 518.37 281.492 518.37 283.635C518.37 283.781 518.381 283.916 518.393 284.062C518.606 286.037 520.267 287.518 522.253 287.518C524.24 287.518 525.912 286.026 526.114 284.062C526.125 283.916 526.136 283.781 526.136 283.635C526.136 281.492 524.386 279.741 522.242 279.741H522.253Z"
                fill="#34C17B"
                id="Path-9"
              />
              <path
                d="M519.167 273.276H496.587C496.127 273.276 495.745 272.895 495.745 272.435V270.538C495.745 267.845 497.933 265.656 500.627 265.656H514.936C517.73 265.656 519.997 267.923 519.997 270.718V272.446C519.997 272.906 519.616 273.288 519.156 273.288L519.167 273.276ZM497.44 271.593H518.325V270.706C518.325 268.843 516.81 267.328 514.947 267.328H500.638C498.876 267.328 497.44 268.765 497.44 270.527V271.582V271.593Z"
                fill="#34C17B"
                id="Path-10"
              />
              <path
                d="M508.09 266.666C508.55 266.666 508.932 267.048 508.932 267.508V272.019C508.932 272.48 508.55 272.861 508.09 272.861C507.63 272.861 507.248 272.48 507.248 272.019V267.508C507.248 267.048 507.63 266.666 508.09 266.666Z"
                fill="#34C17B"
                id="Path-11"
              />
            </g>
          </g>
        </g>
        <g id="Gruppe_979">
          <animated.circle
            cx="484"
            cy="375"
            data-name="Ellipse 1"
            fill="rgba(52,193,123,0.15)"
            r={weselerRadius.val.to(val => val)}
          />
          <g id="MS_Klimadashboard_Icons_m_pendler-copy-2">
            <g id="group-2">
              <path
                d="M488.562 386.993H472.031C471.571 386.993 471.189 386.611 471.189 386.151C471.189 385.691 471.571 385.31 472.031 385.31H488.562C489.022 385.31 489.404 385.691 489.404 386.151C489.404 386.611 489.022 386.993 488.562 386.993Z"
                fill="#34C17B"
                id="Path-12"
              />
              <path
                d="M502.175 386.993H497.956C497.495 386.993 497.114 386.611 497.114 386.151C497.114 385.691 497.495 385.31 497.956 385.31H502.175C503.051 385.31 503.758 384.479 503.758 383.469V378.621C503.758 377.094 502.68 375.849 501.356 375.849H494.555C494.14 375.849 493.792 375.557 493.725 375.142L492.905 370.26C491.648 365.782 488.966 365.153 486.261 365.153H471.503C468.047 365.153 463.928 366.859 463.928 375.007C463.928 375.467 463.546 375.849 463.086 375.849C460.898 375.849 459.113 377.869 459.113 380.36V383.391C459.113 384.457 459.854 385.321 460.763 385.321H462.626C463.086 385.321 463.468 385.702 463.468 386.163C463.468 386.623 463.086 387.004 462.626 387.004H460.763C458.923 387.004 457.43 385.388 457.43 383.391V380.36C457.43 377.252 459.529 374.682 462.256 374.233C462.57 364.536 468.788 363.47 471.503 363.47H486.261C489.28 363.47 492.95 364.199 494.544 369.901L495.262 374.165H501.345C503.601 374.165 505.43 376.163 505.43 378.621V383.469C505.43 385.411 503.971 386.993 502.164 386.993H502.175Z"
                fill="#34C17B"
                id="Path-13"
              />
              <path
                d="M467.34 391.202C464.489 391.202 462.11 389.069 461.807 386.23C461.784 386.039 461.773 385.837 461.773 385.624C461.773 382.549 464.276 380.046 467.34 380.046C470.404 380.046 472.906 382.549 472.906 385.624C472.906 385.826 472.895 386.028 472.873 386.219C472.57 389.047 470.19 391.19 467.34 391.19V391.202ZM467.34 381.741C465.196 381.741 463.457 383.492 463.457 385.635C463.457 385.781 463.457 385.916 463.479 386.05C463.692 388.026 465.353 389.518 467.34 389.518C469.326 389.518 470.987 388.026 471.2 386.062C471.212 385.927 471.223 385.781 471.223 385.635C471.223 383.492 469.483 381.741 467.34 381.741Z"
                fill="#34C17B"
                id="Path-14"
              />
              <path
                d="M493.253 391.202C490.403 391.202 488.023 389.069 487.72 386.23C487.698 386.039 487.687 385.837 487.687 385.624C487.687 382.549 490.189 380.046 493.253 380.046C496.317 380.046 498.831 382.549 498.831 385.624C498.831 385.826 498.82 386.028 498.797 386.23C498.494 389.058 496.115 391.19 493.264 391.19L493.253 391.202ZM493.253 381.741C491.11 381.741 489.37 383.492 489.37 385.635C489.37 385.781 489.381 385.916 489.393 386.062C489.606 388.037 491.267 389.518 493.253 389.518C495.24 389.518 496.912 388.026 497.114 386.062C497.125 385.916 497.136 385.781 497.136 385.635C497.136 383.492 495.386 381.741 493.242 381.741H493.253Z"
                fill="#34C17B"
                id="Path-15"
              />
              <path
                d="M490.167 375.276H467.587C467.127 375.276 466.745 374.895 466.745 374.435V372.538C466.745 369.845 468.933 367.656 471.627 367.656H485.936C488.73 367.656 490.997 369.923 490.997 372.718V374.446C490.997 374.906 490.616 375.288 490.156 375.288L490.167 375.276ZM468.44 373.593H489.325V372.706C489.325 370.843 487.81 369.328 485.947 369.328H471.638C469.876 369.328 468.44 370.765 468.44 372.527V373.582V373.593Z"
                fill="#34C17B"
                id="Path-16"
              />
              <path
                d="M479.09 368.666C479.55 368.666 479.932 369.048 479.932 369.508V374.019C479.932 374.48 479.55 374.861 479.09 374.861C478.63 374.861 478.248 374.48 478.248 374.019V369.508C478.248 369.048 478.63 368.666 479.09 368.666Z"
                fill="#34C17B"
                id="Path-17"
              />
            </g>
          </g>
        </g>
        <g id="Gruppe_978">
          <animated.circle
            cx="534"
            cy="204"
            data-name="Ellipse 2"
            fill="rgba(52,193,123,0.15)"
            r={steinfurterRadius.val.to(val => val)}
          />
          <g id="MS_Klimadashboard_Icons_m_pendler-copy-1">
            <g id="group-3">
              <path
                d="M540.562 213.993H524.031C523.571 213.993 523.189 213.611 523.189 213.151C523.189 212.691 523.571 212.31 524.031 212.31H540.562C541.022 212.31 541.404 212.691 541.404 213.151C541.404 213.611 541.022 213.993 540.562 213.993Z"
                fill="#34C17B"
                id="Path-18"
              />
              <path
                d="M554.175 213.993H549.956C549.495 213.993 549.114 213.611 549.114 213.151C549.114 212.691 549.495 212.31 549.956 212.31H554.175C555.051 212.31 555.758 211.479 555.758 210.469V205.621C555.758 204.095 554.68 202.849 553.356 202.849H546.555C546.14 202.849 545.792 202.557 545.725 202.142L544.905 197.26C543.648 192.782 540.966 192.153 538.261 192.153H523.503C520.047 192.153 515.928 193.859 515.928 202.007C515.928 202.467 515.546 202.849 515.086 202.849C512.898 202.849 511.113 204.869 511.113 207.36V210.391C511.113 211.457 511.854 212.321 512.763 212.321H514.626C515.086 212.321 515.468 212.702 515.468 213.163C515.468 213.623 515.086 214.004 514.626 214.004H512.763C510.923 214.004 509.43 212.388 509.43 210.391V207.36C509.43 204.252 511.529 201.682 514.256 201.233C514.57 191.536 520.787 190.47 523.503 190.47H538.261C541.28 190.47 544.95 191.199 546.544 196.901L547.262 201.165H553.345C555.601 201.165 557.43 203.163 557.43 205.621V210.469C557.43 212.411 555.971 213.993 554.164 213.993H554.175Z"
                fill="#34C17B"
                id="Path-19"
              />
              <path
                d="M519.34 218.202C516.489 218.202 514.11 216.069 513.807 213.23C513.784 213.039 513.773 212.837 513.773 212.624C513.773 209.549 516.276 207.046 519.34 207.046C522.404 207.046 524.906 209.549 524.906 212.624C524.906 212.826 524.895 213.028 524.873 213.219C524.57 216.047 522.19 218.19 519.34 218.19V218.202ZM519.34 208.741C517.196 208.741 515.457 210.492 515.457 212.635C515.457 212.781 515.457 212.916 515.479 213.05C515.692 215.026 517.353 216.518 519.34 216.518C521.326 216.518 522.987 215.026 523.2 213.062C523.212 212.927 523.223 212.781 523.223 212.635C523.223 210.492 521.483 208.741 519.34 208.741Z"
                fill="#34C17B"
                id="Path-20"
              />
              <path
                d="M545.253 218.202C542.403 218.202 540.023 216.069 539.72 213.23C539.698 213.039 539.687 212.837 539.687 212.624C539.687 209.549 542.189 207.046 545.253 207.046C548.317 207.046 550.831 209.549 550.831 212.624C550.831 212.826 550.82 213.028 550.797 213.23C550.494 216.058 548.115 218.19 545.264 218.19L545.253 218.202ZM545.253 208.741C543.11 208.741 541.37 210.492 541.37 212.635C541.37 212.781 541.381 212.916 541.393 213.062C541.606 215.037 543.267 216.518 545.253 216.518C547.24 216.518 548.912 215.026 549.114 213.062C549.125 212.916 549.136 212.781 549.136 212.635C549.136 210.492 547.386 208.741 545.242 208.741H545.253Z"
                fill="#34C17B"
                id="Path-21"
              />
              <path
                d="M542.167 202.276H519.587C519.127 202.276 518.745 201.895 518.745 201.435V199.538C518.745 196.845 520.933 194.656 523.627 194.656H537.936C540.73 194.656 542.997 196.923 542.997 199.718V201.446C542.997 201.906 542.616 202.288 542.156 202.288L542.167 202.276ZM520.44 200.593H541.325V199.706C541.325 197.843 539.81 196.328 537.947 196.328H523.638C521.876 196.328 520.44 197.765 520.44 199.527V200.582V200.593Z"
                fill="#34C17B"
                id="Path-22"
              />
              <path
                d="M531.09 195.666C531.55 195.666 531.932 196.048 531.932 196.508V201.019C531.932 201.48 531.55 201.861 531.09 201.861C530.63 201.861 530.248 201.48 530.248 201.019V196.508C530.248 196.048 530.63 195.666 531.09 195.666Z"
                fill="#34C17B"
                id="Path-23"
              />
            </g>
          </g>
        </g>
        <g id="Gruppe_980">
          <animated.circle
            cx="648"
            cy="213"
            data-name="Ellipse 3"
            fill="rgba(52,193,123,0.15)"
            r={warendorferRadius.val.to(val => val)}
          />

          <g id="MS_Klimadashboard_Icons_m_pendler-copy">
            <g id="group-4">
              <path
                d="M655.562 222.993H639.031C638.571 222.993 638.189 222.611 638.189 222.151C638.189 221.691 638.571 221.31 639.031 221.31H655.562C656.022 221.31 656.404 221.691 656.404 222.151C656.404 222.611 656.022 222.993 655.562 222.993Z"
                fill="#34C17B"
                id="Path-24"
              />
              <path
                d="M669.175 222.993H664.956C664.495 222.993 664.114 222.611 664.114 222.151C664.114 221.691 664.495 221.31 664.956 221.31H669.175C670.051 221.31 670.758 220.479 670.758 219.469V214.621C670.758 213.095 669.68 211.849 668.356 211.849H661.555C661.14 211.849 660.792 211.557 660.725 211.142L659.905 206.26C658.648 201.782 655.966 201.153 653.261 201.153H638.503C635.047 201.153 630.928 202.859 630.928 211.007C630.928 211.467 630.546 211.849 630.086 211.849C627.898 211.849 626.113 213.869 626.113 216.36V219.391C626.113 220.457 626.854 221.321 627.763 221.321H629.626C630.086 221.321 630.468 221.702 630.468 222.163C630.468 222.623 630.086 223.004 629.626 223.004H627.763C625.923 223.004 624.43 221.388 624.43 219.391V216.36C624.43 213.252 626.529 210.682 629.256 210.233C629.57 200.536 635.787 199.47 638.503 199.47H653.261C656.28 199.47 659.95 200.199 661.544 205.901L662.262 210.165H668.345C670.601 210.165 672.43 212.163 672.43 214.621V219.469C672.43 221.411 670.971 222.993 669.164 222.993H669.175Z"
                fill="#34C17B"
                id="Path-25"
              />
              <path
                d="M634.34 227.202C631.489 227.202 629.11 225.069 628.807 222.23C628.784 222.039 628.773 221.837 628.773 221.624C628.773 218.549 631.276 216.046 634.34 216.046C637.404 216.046 639.906 218.549 639.906 221.624C639.906 221.826 639.895 222.028 639.873 222.219C639.57 225.047 637.19 227.19 634.34 227.19V227.202ZM634.34 217.741C632.196 217.741 630.457 219.492 630.457 221.635C630.457 221.781 630.457 221.916 630.479 222.05C630.692 224.026 632.353 225.518 634.34 225.518C636.326 225.518 637.987 224.026 638.2 222.062C638.212 221.927 638.223 221.781 638.223 221.635C638.223 219.492 636.483 217.741 634.34 217.741Z"
                fill="#34C17B"
                id="Path-26"
              />
              <path
                d="M660.253 227.202C657.403 227.202 655.023 225.069 654.72 222.23C654.698 222.039 654.687 221.837 654.687 221.624C654.687 218.549 657.189 216.046 660.253 216.046C663.317 216.046 665.831 218.549 665.831 221.624C665.831 221.826 665.82 222.028 665.797 222.23C665.494 225.058 663.115 227.19 660.264 227.19L660.253 227.202ZM660.253 217.741C658.11 217.741 656.37 219.492 656.37 221.635C656.37 221.781 656.381 221.916 656.393 222.062C656.606 224.037 658.267 225.518 660.253 225.518C662.24 225.518 663.912 224.026 664.114 222.062C664.125 221.916 664.136 221.781 664.136 221.635C664.136 219.492 662.386 217.741 660.242 217.741H660.253Z"
                fill="#34C17B"
                id="Path-27"
              />
              <path
                d="M657.167 211.276H634.587C634.127 211.276 633.745 210.895 633.745 210.435V208.538C633.745 205.845 635.933 203.656 638.627 203.656H652.936C655.73 203.656 657.997 205.923 657.997 208.718V210.446C657.997 210.906 657.616 211.288 657.156 211.288L657.167 211.276ZM635.44 209.593H656.325V208.706C656.325 206.843 654.81 205.328 652.947 205.328H638.638C636.876 205.328 635.44 206.765 635.44 208.527V209.582V209.593Z"
                fill="#34C17B"
                id="Path-28"
              />
              <path
                d="M646.09 204.666C646.55 204.666 646.932 205.048 646.932 205.508V210.019C646.932 210.48 646.55 210.861 646.09 210.861C645.63 210.861 645.248 210.48 645.248 210.019V205.508C645.248 205.048 645.63 204.666 646.09 204.666Z"
                fill="#34C17B"
                id="Path-29"
              />
            </g>
          </g>
        </g>
        <path
          d="M1162.26 94.607H624.256V238.355"
          id="Pfad_376"
          stroke="#005B79"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <text
          fill="#34C17B"
          fontSize="40"
          fontWeight={500}
          id="2.893.526"
          letterSpacing="0em"
          xmlSpace="preserve"
        >
          {weseler === 0 ? (
            <tspan x="5" y="510.545">
              Keine Daten
            </tspan>
          ) : (
            <AnimatedNumberSVG x="5" y="510.545">
              {Number(weseler)}
            </AnimatedNumberSVG>
          )}
        </text>
        <text
          fill="#005B79"
          fontSize="20"
          fontWeight={500}
          id="Weseler-Str.-/-Inselbogen"
          letterSpacing="0em"
          xmlSpace="preserve"
        >
          <tspan x="5" y="459.273">
            Weseler Str. / Inselbogen
          </tspan>
        </text>
        <text
          fill="#34C17B"
          fontSize="40"
          fontWeight={500}
          id="5.753.832"
          letterSpacing="0em"
          xmlSpace="preserve"
        >
          {albersloher === 0 ? (
            <tspan x="862" y="510.545">
              Keine Daten
            </tspan>
          ) : (
            <AnimatedNumberSVG x="862" y="510.545">
              {Number(albersloher)}
            </AnimatedNumberSVG>
          )}
        </text>
        <text
          fill="#005B79"
          fontSize="20"
          fontWeight={500}
          id="Albersloher-Weg-/-Heumannsweg-"
          letterSpacing="0em"
          xmlSpace="preserve"
        >
          <tspan x="862" y="460.273">
            Albersloher Weg / Heumannsweg{' '}
          </tspan>
        </text>
        <text
          fill="#34C17B"
          fontSize="40"
          fontWeight={500}
          id="2.428.372"
          letterSpacing="0em"
          xmlSpace="preserve"
        >
          {warendorfer === 0 ? (
            <tspan x="862" y="182.545">
              Keine Daten
            </tspan>
          ) : (
            <AnimatedNumberSVG x="862" y="182.545">
              {Number(warendorfer)}
            </AnimatedNumberSVG>
          )}
        </text>
        <text
          fill="#005B79"
          fontSize="20"
          fontWeight={500}
          id="Warendorfer-Str.-/-Schifffahrter-Damm"
          letterSpacing="0em"
          xmlSpace="preserve"
        >
          <tspan x="862" y="130.273">
            Warendorfer Str. / Schifffahrter Damm
          </tspan>
        </text>
        <path
          d="M553.5 246.064C553.5 249.654 550.59 252.564 547 252.564C543.41 252.564 540.5 249.654 540.5 246.064C540.5 242.475 543.41 239.564 547 239.564C550.59 239.564 553.5 242.475 553.5 246.064Z"
          fill="#005B79"
          id="Ellipse_55"
        />
        <path
          d="M630.5 239.064C630.5 242.654 627.59 245.564 624 245.564C620.41 245.564 617.5 242.654 617.5 239.064C617.5 235.475 620.41 232.564 624 232.564C627.59 232.564 630.5 235.475 630.5 239.064Z"
          fill="#005B79"
          id="Ellipse_56"
        />
        <path
          d="M600.5 308.543C600.5 312.133 597.59 315.043 594 315.043C590.41 315.043 587.5 312.133 587.5 308.543C587.5 304.953 590.41 302.043 594 302.043C597.59 302.043 600.5 304.953 600.5 308.543Z"
          fill="#005B79"
          id="Ellipse_57"
        />
        <path
          d="M497.256 380.107C497.256 383.697 494.346 386.607 490.756 386.607C487.166 386.607 484.256 383.697 484.256 380.107C484.256 376.518 487.166 373.607 490.756 373.607C494.346 373.607 497.256 376.518 497.256 380.107Z"
          fill="#005B79"
          id="Ellipse_58"
        />
        <text
          fill="#34C17B"
          fontSize="40"
          fontWeight={500}
          id="4.397.847"
          letterSpacing="0em"
          xmlSpace="preserve"
        >
          {steinfurter === 0 ? (
            <tspan x="5" y="179.545">
              Keine Daten
            </tspan>
          ) : (
            <AnimatedNumberSVG x="5" y="179.545">
              {Number(steinfurter)}
            </AnimatedNumberSVG>
          )}
        </text>
        <text
          fill="#005B79"
          fontSize="20"
          fontWeight={500}
          id="Steinfurter-Str.-/-Austermannstr."
          letterSpacing="0em"
          xmlSpace="preserve"
        >
          <tspan x="5" y="130.273">
            Steinfurter Str. / Austermannstr.
          </tspan>
        </text>
        <text
          fill="#34C17B"
          fontSize="40"
          fontWeight={500}
          id="4.397.847-1"
          letterSpacing="0em"
          xmlSpace="preserve"
        >
          {rishon === 0 ? (
            <tspan x="5" y="343.545">
              Keine Daten
            </tspan>
          ) : (
            <AnimatedNumberSVG x="5" y="343.545">
              {Number(rishon)}
            </AnimatedNumberSVG>
          )}
        </text>
        <text
          fill="#005B79"
          fontSize="20"
          fontWeight={500}
          id="Rishon-le-Zion-Ring-/-Einsteinstr."
          letterSpacing="0em"
          xmlSpace="preserve"
        >
          <tspan x="5" y="293.273">
            Rishon-le-Zion-Ring / Einsteinstr.
          </tspan>
        </text>
        <path
          d="M541 275.545C541 279.135 538.09 282.045 534.5 282.045C530.91 282.045 528 279.135 528 275.545C528 271.955 530.91 269.045 534.5 269.045C538.09 269.045 541 271.955 541 275.545Z"
          fill="#005B79"
          id="Ellipse_59"
        />
        <path
          d="M1 94.607H547V245.564"
          id="Pfad_375"
          stroke="#005B79"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1 260.902H535.5V275.652"
          id="Pfad_405"
          stroke="#005B79"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1 426.292H490.5V380.107"
          id="Pfad_378"
          stroke="#005B79"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
        <path
          d="M1132.26 426.292H594.256V307.833"
          id="Pfad_377"
          stroke="#005B79"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </svg>
  )
}
