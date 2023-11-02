'use client'

import { map } from '@/utils/map'
import { animated, useSpring } from '@react-spring/web'
import * as React from 'react'
import { SVGProps } from 'react'

const MIN_RADIUS = 20
const MAX_RADIUS = 50

interface TrafficMapProps extends SVGProps<SVGSVGElement> {
  albersloher: number
  warendorfer: number
  weseler: number
  rishon: number
  steinfurter: number
  active: 'albersloher' | 'warendorfer' | 'weseler' | 'rishon' | 'steinfurter'
}

export default function TrafficMapMobile({
  albersloher,
  warendorfer,
  weseler,
  rishon,
  steinfurter,
  active,
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

  function getFill(location: typeof active) {
    return active === location
      ? 'rgba(0, 91, 121, 0.15'
      : 'rgba(52,193,123,0.15)'
  }

  function getStroke(location: typeof active) {
    return active === location ? '#005B79' : '#34c17b'
  }

  function getOpacity(location: typeof active) {
    return active === location ? 1 : 0
  }

  return (
    <svg
      fill="none"
      height="335"
      viewBox="0 0 317 335"
      width="317"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Gruppe 976">
        <path
          d="M197.554 9.309L191.247 23.272L173.917 28.688L147.901 0L133.725 6.206V17.066L116.381 22.5L79.3426 40.325L76.9746 65.91L60.4366 77.546L67.5366 125.628L30.4936 155.868L24.9746 181.454L58.0746 191.539L48.6146 221.779L54.1336 248.916L78.5586 244.262L84.8656 269.086L95.9026 295.447L103.782 312.5L121.9 329.566L147.9 334.22L156.572 314.051L170.762 317.93L185.726 307.084L188.879 282.26L215.669 286.139L239.32 294.672L249.575 283.034L232.227 255.9L229.862 243.488L247.206 238.848L280.306 253.573L293.694 249.694L300.794 229.539L314.194 217.127L305.522 200.075L290.543 185.336L285.827 162.078L272.427 144.236L270.062 112.445L285.829 95.393L261.382 51.961L251.922 42.652H234.592L218.825 28.688L197.554 9.309Z"
          fill="#34C17B"
          fill-opacity="0.15"
          id="Stroke 1"
        />
        <g id="Gruppe 947">
          <path
            d="M26.6465 44.5957C33.2776 52.1297 39.1933 60.2651 44.3159 68.896C52.6959 83.064 71.5596 101.668 80.1206 103.439C88.6816 105.21 94.3666 106.914 105.911 108.465C117.455 110.016 120.777 106.577 130.283 116.743C139.789 126.909 155.622 143.243 155.622 143.243L160.694 144.886"
            id="Pfad 365"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M0.363281 241.487C0.363281 241.487 21.4566 249.722 30.9146 246.856C40.3726 243.99 69.8477 229.78 69.8477 229.78C69.8477 229.78 94.4616 223.608 105.248 222.844C116.034 222.08 126.457 221.524 134.803 206.544C143.149 191.564 154.328 171.715 154.328 171.715L160.863 160.845V144.945L179.388 151.692"
            id="Pfad 366"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M257.74 278.782L241.383 260.07H235.604L229.676 236.337L211.203 213.408C211.203 213.408 199.823 196.066 192.681 188.817C185.539 181.568 174.512 169.053 174.512 169.053V162.386L175.676 155.586"
            id="Pfad 367"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M316.334 105.745L309.024 110.081L302.124 118.776H278.363L231.403 130.692L218.335 134.911H210.078L184.578 145.601"
            id="Pfad 368"
            stroke="white"
            stroke-width="2"
          />
          <path
            d="M160.194 161.896L168.535 162.388L175.947 155.261L185.014 145.4"
            id="Pfad 369"
            stroke="white"
            stroke-width="2"
          />
        </g>
        <path
          d="M216.125 2.7207L225.934 32.2117L221.044 42.4117V75.9977L216.124 79.7737L204.155 112.55L202.179 115.276L198.528 133.028V140.317"
          id="Pfad 595"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M16.7266 162.912L55.9766 168.858L83.9146 188.165L123.115 218.717"
          id="Pfad 596"
          stroke="white"
          stroke-width="2"
        />
        <path
          d="M152.75 172.086L146.95 167.186V143.993L151.361 139.037"
          id="Pfad 597"
          stroke="white"
          stroke-width="3"
        />
        <path
          d="M158.348 2.7207V17.9207L160.475 23.4657V32.1267L158.348 45.9047L156.38 104.137V143.261"
          id="Pfad 598"
          stroke="white"
          stroke-width="2"
        />
        <g id="Gruppe 950">
          <animated.circle
            cx="131.385"
            cy="159.125"
            data-name="Ellipse Ring"
            fill={getFill('rishon')}
            r={rishonRadius.val.to(val => val)}
          />
          <g id="MS_Klimadashboard_Icons_m_pendler">
            <g fill={getStroke('rishon')} id="group">
              <path
                d="M135.512 164.232H126.213C125.954 164.232 125.739 164.017 125.739 163.758C125.739 163.499 125.954 163.285 126.213 163.285H135.512C135.771 163.285 135.985 163.499 135.985 163.758C135.985 164.017 135.771 164.232 135.512 164.232Z"
                id="Path"
              />
              <path
                d="M143.169 164.232H140.796C140.537 164.232 140.322 164.017 140.322 163.758C140.322 163.499 140.537 163.285 140.796 163.285H143.169C143.662 163.285 144.06 162.818 144.06 162.249V159.522C144.06 158.664 143.453 157.963 142.708 157.963H138.883C138.649 157.963 138.454 157.799 138.416 157.565L137.955 154.819C137.248 152.301 135.739 151.947 134.217 151.947H125.916C123.972 151.947 121.655 152.906 121.655 157.49C121.655 157.748 121.44 157.963 121.182 157.963C119.951 157.963 118.947 159.099 118.947 160.501V162.206C118.947 162.805 119.364 163.291 119.875 163.291H120.923C121.181 163.291 121.396 163.505 121.396 163.765C121.396 164.024 121.181 164.238 120.923 164.238H119.875C118.84 164.238 118 163.329 118 162.206V160.501C118 158.752 119.181 157.307 120.715 157.054C120.891 151.6 124.388 151 125.916 151H134.217C135.916 151 137.98 151.41 138.877 154.617L139.281 157.016H142.702C143.971 157.016 145 158.14 145 159.522V162.249C145 163.342 144.179 164.232 143.163 164.232H143.169Z"
                id="Path-1"
              />
              <path
                d="M123.574 166.599C121.971 166.599 120.633 165.399 120.462 163.803C120.449 163.695 120.443 163.581 120.443 163.462C120.443 161.732 121.851 160.324 123.574 160.324C125.298 160.324 126.705 161.732 126.705 163.462C126.705 163.575 126.699 163.689 126.687 163.796C126.516 165.387 125.178 166.593 123.574 166.593V166.599ZM123.574 161.277C122.368 161.277 121.39 162.262 121.39 163.468C121.39 163.55 121.39 163.626 121.403 163.701C121.522 164.813 122.457 165.652 123.574 165.652C124.692 165.652 125.626 164.813 125.746 163.708C125.752 163.632 125.759 163.55 125.759 163.468C125.759 162.262 124.78 161.277 123.574 161.277Z"
                id="Path-2"
              />
              <path
                d="M138.15 166.599C136.547 166.599 135.209 165.399 135.038 163.803C135.026 163.695 135.02 163.581 135.02 163.462C135.02 161.732 136.427 160.324 138.15 160.324C139.874 160.324 141.288 161.732 141.288 163.462C141.288 163.575 141.282 163.689 141.269 163.803C141.099 165.393 139.76 166.593 138.157 166.593L138.15 166.599ZM138.15 161.277C136.945 161.277 135.966 162.262 135.966 163.468C135.966 163.55 135.972 163.626 135.979 163.708C136.099 164.819 137.033 165.652 138.15 165.652C139.268 165.652 140.209 164.813 140.322 163.708C140.328 163.626 140.335 163.55 140.335 163.468C140.335 162.262 139.35 161.277 138.144 161.277H138.15Z"
                id="Path-3"
              />
              <path
                d="M136.415 157.641H123.713C123.455 157.641 123.24 157.427 123.24 157.168V156.101C123.24 154.586 124.47 153.355 125.986 153.355H134.035C135.606 153.355 136.881 154.63 136.881 156.202V157.174C136.881 157.433 136.667 157.648 136.408 157.648L136.415 157.641ZM124.193 156.694H135.941V156.195C135.941 155.147 135.089 154.295 134.041 154.295H125.992C125.001 154.295 124.193 155.103 124.193 156.095V156.688V156.694Z"
                id="Path-4"
              />
              <path
                d="M130.184 153.923C130.443 153.923 130.657 154.138 130.657 154.396V156.934C130.657 157.193 130.443 157.407 130.184 157.407C129.925 157.407 129.71 157.193 129.71 156.934V154.396C129.71 154.138 129.925 153.923 130.184 153.923Z"
                id="Path-5"
              />
            </g>
          </g>
        </g>
        <g id="Gruppe 962">
          <animated.circle
            cx="117.385"
            cy="199.125"
            data-name="Ellipse Weseler"
            fill={getFill('weseler')}
            r={weselerRadius.val.to(val => val)}
          />
          <g id="MS_Klimadashboard_Icons_m_pendler_2">
            <g fill={getStroke('weseler')} id="group_2">
              <path
                d="M121.512 204.232H112.213C111.954 204.232 111.739 204.017 111.739 203.758C111.739 203.499 111.954 203.285 112.213 203.285H121.512C121.771 203.285 121.985 203.499 121.985 203.758C121.985 204.017 121.771 204.232 121.512 204.232Z"
                id="Path_2"
              />
              <path
                d="M129.169 204.232H126.796C126.537 204.232 126.322 204.017 126.322 203.758C126.322 203.499 126.537 203.285 126.796 203.285H129.169C129.662 203.285 130.06 202.818 130.06 202.249V199.522C130.06 198.664 129.453 197.963 128.708 197.963H124.883C124.649 197.963 124.454 197.799 124.416 197.565L123.955 194.819C123.248 192.301 121.739 191.947 120.217 191.947H111.916C109.972 191.947 107.655 192.906 107.655 197.49C107.655 197.748 107.44 197.963 107.182 197.963C105.951 197.963 104.947 199.099 104.947 200.501V202.206C104.947 202.805 105.364 203.291 105.875 203.291H106.923C107.181 203.291 107.396 203.505 107.396 203.765C107.396 204.024 107.181 204.238 106.923 204.238H105.875C104.84 204.238 104 203.329 104 202.206V200.501C104 198.752 105.181 197.307 106.715 197.054C106.891 191.6 110.388 191 111.916 191H120.217C121.916 191 123.98 191.41 124.877 194.617L125.281 197.016H128.702C129.971 197.016 131 198.14 131 199.522V202.249C131 203.342 130.179 204.232 129.163 204.232H129.169Z"
                id="Path-1_2"
              />
              <path
                d="M109.574 206.599C107.971 206.599 106.633 205.399 106.462 203.803C106.449 203.695 106.443 203.581 106.443 203.462C106.443 201.732 107.851 200.324 109.574 200.324C111.298 200.324 112.705 201.732 112.705 203.462C112.705 203.575 112.699 203.689 112.687 203.796C112.516 205.387 111.178 206.593 109.574 206.593V206.599ZM109.574 201.277C108.368 201.277 107.39 202.262 107.39 203.468C107.39 203.55 107.39 203.626 107.403 203.701C107.522 204.813 108.457 205.652 109.574 205.652C110.692 205.652 111.626 204.813 111.746 203.708C111.752 203.632 111.759 203.55 111.759 203.468C111.759 202.262 110.78 201.277 109.574 201.277Z"
                id="Path-2_2"
              />
              <path
                d="M124.15 206.599C122.547 206.599 121.209 205.399 121.038 203.803C121.026 203.695 121.02 203.581 121.02 203.462C121.02 201.732 122.427 200.324 124.15 200.324C125.874 200.324 127.288 201.732 127.288 203.462C127.288 203.575 127.282 203.689 127.269 203.803C127.099 205.393 125.76 206.593 124.157 206.593L124.15 206.599ZM124.15 201.277C122.945 201.277 121.966 202.262 121.966 203.468C121.966 203.55 121.972 203.626 121.979 203.708C122.099 204.819 123.033 205.652 124.15 205.652C125.268 205.652 126.209 204.813 126.322 203.708C126.328 203.626 126.335 203.55 126.335 203.468C126.335 202.262 125.35 201.277 124.144 201.277H124.15Z"
                id="Path-3_2"
              />
              <path
                d="M122.415 197.641H109.713C109.455 197.641 109.24 197.427 109.24 197.168V196.101C109.24 194.586 110.47 193.355 111.986 193.355H120.035C121.606 193.355 122.881 194.63 122.881 196.202V197.174C122.881 197.433 122.667 197.648 122.408 197.648L122.415 197.641ZM110.193 196.694H121.941V196.195C121.941 195.147 121.089 194.295 120.041 194.295H111.992C111.001 194.295 110.193 195.103 110.193 196.095V196.688V196.694Z"
                id="Path-4_2"
              />
              <path
                d="M116.184 193.923C116.443 193.923 116.657 194.138 116.657 194.396V196.934C116.657 197.193 116.443 197.407 116.184 197.407C115.925 197.407 115.71 197.193 115.71 196.934V194.396C115.71 194.138 115.925 193.923 116.184 193.923Z"
                id="Path-5_2"
              />
            </g>
          </g>
        </g>
        <g id="Gruppe 963">
          <animated.circle
            cx="198.385"
            cy="194.125"
            data-name="Ellipse Albersloher"
            fill={getFill('albersloher')}
            r={albersloherRadius.val.to(val => val)}
          />
          <g id="MS_Klimadashboard_Icons_m_pendler_3">
            <g fill={getStroke('albersloher')} id="group_3">
              <path
                d="M202.512 199.232H193.213C192.954 199.232 192.739 199.017 192.739 198.758C192.739 198.499 192.954 198.285 193.213 198.285H202.512C202.771 198.285 202.985 198.499 202.985 198.758C202.985 199.017 202.771 199.232 202.512 199.232Z"
                id="Path_3"
              />
              <path
                d="M210.169 199.232H207.796C207.537 199.232 207.322 199.017 207.322 198.758C207.322 198.499 207.537 198.285 207.796 198.285H210.169C210.662 198.285 211.06 197.818 211.06 197.249V194.522C211.06 193.664 210.453 192.963 209.708 192.963H205.883C205.649 192.963 205.454 192.799 205.416 192.565L204.955 189.819C204.248 187.301 202.739 186.947 201.217 186.947H192.916C190.972 186.947 188.655 187.906 188.655 192.49C188.655 192.748 188.44 192.963 188.182 192.963C186.951 192.963 185.947 194.099 185.947 195.501V197.206C185.947 197.805 186.364 198.291 186.875 198.291H187.923C188.181 198.291 188.396 198.505 188.396 198.765C188.396 199.024 188.181 199.238 187.923 199.238H186.875C185.84 199.238 185 198.329 185 197.206V195.501C185 193.752 186.181 192.307 187.715 192.054C187.891 186.6 191.388 186 192.916 186H201.217C202.916 186 204.98 186.41 205.877 189.617L206.281 192.016H209.702C210.971 192.016 212 193.14 212 194.522V197.249C212 198.342 211.179 199.232 210.163 199.232H210.169Z"
                id="Path-1_3"
              />
              <path
                d="M190.574 201.599C188.971 201.599 187.633 200.399 187.462 198.803C187.449 198.695 187.443 198.581 187.443 198.462C187.443 196.732 188.851 195.324 190.574 195.324C192.298 195.324 193.705 196.732 193.705 198.462C193.705 198.575 193.699 198.689 193.687 198.796C193.516 200.387 192.178 201.593 190.574 201.593V201.599ZM190.574 196.277C189.368 196.277 188.39 197.262 188.39 198.468C188.39 198.55 188.39 198.626 188.403 198.701C188.522 199.813 189.457 200.652 190.574 200.652C191.692 200.652 192.626 199.813 192.746 198.708C192.752 198.632 192.759 198.55 192.759 198.468C192.759 197.262 191.78 196.277 190.574 196.277Z"
                id="Path-2_3"
              />
              <path
                d="M205.15 201.599C203.547 201.599 202.209 200.399 202.038 198.803C202.026 198.695 202.02 198.581 202.02 198.462C202.02 196.732 203.427 195.324 205.15 195.324C206.874 195.324 208.288 196.732 208.288 198.462C208.288 198.575 208.282 198.689 208.269 198.803C208.099 200.393 206.76 201.593 205.157 201.593L205.15 201.599ZM205.15 196.277C203.945 196.277 202.966 197.262 202.966 198.468C202.966 198.55 202.972 198.626 202.979 198.708C203.099 199.819 204.033 200.652 205.15 200.652C206.268 200.652 207.209 199.813 207.322 198.708C207.328 198.626 207.335 198.55 207.335 198.468C207.335 197.262 206.35 196.277 205.144 196.277H205.15Z"
                id="Path-3_3"
              />
              <path
                d="M203.415 192.641H190.713C190.455 192.641 190.24 192.427 190.24 192.168V191.101C190.24 189.586 191.47 188.355 192.986 188.355H201.035C202.606 188.355 203.881 189.63 203.881 191.202V192.174C203.881 192.433 203.667 192.648 203.408 192.648L203.415 192.641ZM191.193 191.694H202.941V191.195C202.941 190.147 202.089 189.295 201.041 189.295H192.992C192.001 189.295 191.193 190.103 191.193 191.095V191.688V191.694Z"
                id="Path-4_3"
              />
              <path
                d="M197.184 188.923C197.443 188.923 197.657 189.138 197.657 189.396V191.934C197.657 192.193 197.443 192.407 197.184 192.407C196.925 192.407 196.71 192.193 196.71 191.934V189.396C196.71 189.138 196.925 188.923 197.184 188.923Z"
                id="Path-5_3"
              />
            </g>
          </g>
        </g>
        <g id="Gruppe Albersloher" opacity={getOpacity('albersloher')}>
          <path
            d="M180.782 305.719V175.004"
            id="Pfad 603"
            stroke="#005B79"
            stroke-linecap="round"
            stroke-width="1.5"
          />
          <path
            d="M180.443 182.004C183.205 182.004 185.443 179.765 185.443 177.004C185.443 174.242 183.205 172.004 180.443 172.004C177.682 172.004 175.443 174.242 175.443 177.004C175.443 179.765 177.682 182.004 180.443 182.004Z"
            fill="#005B79"
            id="Ellipse 130"
          />
        </g>
        <g id="Gruppe Weseler" opacity={getOpacity('weseler')}>
          <path
            d="M122.116 305.719V222.043"
            id="Pfad 602"
            stroke="#005B79"
            stroke-linecap="round"
            stroke-width="1.5"
          />
          <path
            d="M122.604 229.125C125.365 229.125 127.604 226.886 127.604 224.125C127.604 221.364 125.365 219.125 122.604 219.125C119.842 219.125 117.604 221.364 117.604 224.125C117.604 226.886 119.842 229.125 122.604 229.125Z"
            fill="#005B79"
            id="Ellipse 131"
          />
        </g>
        <g id="Gruppe Ring" opacity={getOpacity('rishon')}>
          <path
            d="M150.729 305.719V162.912"
            id="Pfad 601"
            stroke="#005B79"
            stroke-linecap="round"
            stroke-width="1.5"
          />
          <path
            d="M150.816 169.934C153.578 169.934 155.816 167.695 155.816 164.934C155.816 162.172 153.578 159.934 150.816 159.934C148.055 159.934 145.816 162.172 145.816 164.934C145.816 167.695 148.055 169.934 150.816 169.934Z"
            fill="#005B79"
            id="Ellipse 132"
          />
        </g>
        <g id="Gruppe 960">
          <animated.circle
            cx="217.385"
            cy="120.125"
            data-name="Ellipse Warendorfer"
            fill={getFill('warendorfer')}
            r={warendorferRadius.val.to(val => val)}
          />
          <g id="MS_Klimadashboard_Icons_m_pendler_4">
            <g fill={getStroke('warendorfer')} id="group_4">
              <path
                d="M221.512 125.232H212.213C211.954 125.232 211.739 125.017 211.739 124.758C211.739 124.499 211.954 124.285 212.213 124.285H221.512C221.771 124.285 221.985 124.499 221.985 124.758C221.985 125.017 221.771 125.232 221.512 125.232Z"
                id="Path_4"
              />
              <path
                d="M229.169 125.232H226.796C226.537 125.232 226.322 125.017 226.322 124.758C226.322 124.499 226.537 124.285 226.796 124.285H229.169C229.662 124.285 230.06 123.818 230.06 123.249V120.522C230.06 119.664 229.453 118.963 228.708 118.963H224.883C224.649 118.963 224.454 118.799 224.416 118.565L223.955 115.819C223.248 113.301 221.739 112.947 220.217 112.947H211.916C209.972 112.947 207.655 113.906 207.655 118.49C207.655 118.748 207.44 118.963 207.182 118.963C205.951 118.963 204.947 120.099 204.947 121.501V123.206C204.947 123.805 205.364 124.291 205.875 124.291H206.923C207.181 124.291 207.396 124.505 207.396 124.765C207.396 125.024 207.181 125.238 206.923 125.238H205.875C204.84 125.238 204 124.329 204 123.206V121.501C204 119.752 205.181 118.307 206.715 118.054C206.891 112.6 210.388 112 211.916 112H220.217C221.916 112 223.98 112.41 224.877 115.617L225.281 118.016H228.702C229.971 118.016 231 119.14 231 120.522V123.249C231 124.342 230.179 125.232 229.163 125.232H229.169Z"
                id="Path-1_4"
              />
              <path
                d="M209.574 127.599C207.971 127.599 206.633 126.399 206.462 124.803C206.449 124.695 206.443 124.581 206.443 124.462C206.443 122.732 207.851 121.324 209.574 121.324C211.298 121.324 212.705 122.732 212.705 124.462C212.705 124.575 212.699 124.689 212.687 124.796C212.516 126.387 211.178 127.592 209.574 127.592V127.599ZM209.574 122.277C208.368 122.277 207.39 123.262 207.39 124.468C207.39 124.55 207.39 124.626 207.403 124.701C207.522 125.813 208.457 126.652 209.574 126.652C210.692 126.652 211.626 125.813 211.746 124.708C211.752 124.632 211.759 124.55 211.759 124.468C211.759 123.262 210.78 122.277 209.574 122.277Z"
                id="Path-2_4"
              />
              <path
                d="M224.15 127.599C222.547 127.599 221.209 126.399 221.038 124.803C221.026 124.695 221.02 124.581 221.02 124.462C221.02 122.732 222.427 121.324 224.15 121.324C225.874 121.324 227.288 122.732 227.288 124.462C227.288 124.575 227.282 124.689 227.269 124.803C227.099 126.393 225.76 127.592 224.157 127.592L224.15 127.599ZM224.15 122.277C222.945 122.277 221.966 123.262 221.966 124.468C221.966 124.55 221.972 124.626 221.979 124.708C222.099 125.819 223.033 126.652 224.15 126.652C225.268 126.652 226.209 125.813 226.322 124.708C226.328 124.626 226.335 124.55 226.335 124.468C226.335 123.262 225.35 122.277 224.144 122.277H224.15Z"
                id="Path-3_4"
              />
              <path
                d="M222.415 118.641H209.713C209.455 118.641 209.24 118.427 209.24 118.168V117.101C209.24 115.586 210.47 114.355 211.986 114.355H220.035C221.606 114.355 222.881 115.63 222.881 117.202V118.174C222.881 118.433 222.667 118.648 222.408 118.648L222.415 118.641ZM210.193 117.694H221.941V117.195C221.941 116.147 221.089 115.295 220.041 115.295H211.992C211.001 115.295 210.193 116.103 210.193 117.095V117.688V117.694Z"
                id="Path-4_4"
              />
              <path
                d="M216.184 114.923C216.443 114.923 216.657 115.138 216.657 115.396V117.934C216.657 118.193 216.443 118.407 216.184 118.407C215.925 118.407 215.71 118.193 215.71 117.934V115.396C215.71 115.138 215.925 114.923 216.184 114.923Z"
                id="Path-5_4"
              />
            </g>
          </g>
        </g>
        <g id="Gruppe 961">
          <animated.circle
            cx="150.825"
            cy="115.825"
            data-name="Ellipse Steinfurter"
            fill={getFill('steinfurter')}
            r={steinfurterRadius.val.to(val => val)}
          />
          <g id="MS_Klimadashboard_Icons_m_pendler_5">
            <g fill={getStroke('steinfurter')} id="group_5">
              <path
                d="M154.512 121.232H145.213C144.954 121.232 144.739 121.017 144.739 120.758C144.739 120.499 144.954 120.285 145.213 120.285H154.512C154.771 120.285 154.985 120.499 154.985 120.758C154.985 121.017 154.771 121.232 154.512 121.232Z"
                id="Path_5"
              />
              <path
                d="M162.169 121.232H159.796C159.537 121.232 159.322 121.017 159.322 120.758C159.322 120.499 159.537 120.285 159.796 120.285H162.169C162.662 120.285 163.06 119.818 163.06 119.249V116.522C163.06 115.664 162.453 114.963 161.708 114.963H157.883C157.649 114.963 157.454 114.799 157.416 114.565L156.955 111.819C156.248 109.301 154.739 108.947 153.217 108.947H144.916C142.972 108.947 140.655 109.906 140.655 114.49C140.655 114.748 140.44 114.963 140.182 114.963C138.951 114.963 137.947 116.099 137.947 117.501V119.206C137.947 119.805 138.364 120.291 138.875 120.291H139.923C140.181 120.291 140.396 120.505 140.396 120.765C140.396 121.024 140.181 121.238 139.923 121.238H138.875C137.84 121.238 137 120.329 137 119.206V117.501C137 115.752 138.181 114.307 139.715 114.054C139.891 108.6 143.388 108 144.916 108H153.217C154.916 108 156.98 108.41 157.877 111.617L158.281 114.016H161.702C162.971 114.016 164 115.14 164 116.522V119.249C164 120.342 163.179 121.232 162.163 121.232H162.169Z"
                id="Path-1_5"
              />
              <path
                d="M142.574 123.599C140.971 123.599 139.633 122.399 139.462 120.803C139.449 120.695 139.443 120.581 139.443 120.462C139.443 118.732 140.851 117.324 142.574 117.324C144.298 117.324 145.705 118.732 145.705 120.462C145.705 120.575 145.699 120.689 145.687 120.796C145.516 122.387 144.178 123.592 142.574 123.592V123.599ZM142.574 118.277C141.368 118.277 140.39 119.262 140.39 120.468C140.39 120.55 140.39 120.626 140.403 120.701C140.522 121.813 141.457 122.652 142.574 122.652C143.692 122.652 144.626 121.813 144.746 120.708C144.752 120.632 144.759 120.55 144.759 120.468C144.759 119.262 143.78 118.277 142.574 118.277Z"
                id="Path-2_5"
              />
              <path
                d="M157.15 123.599C155.547 123.599 154.209 122.399 154.038 120.803C154.026 120.695 154.02 120.581 154.02 120.462C154.02 118.732 155.427 117.324 157.15 117.324C158.874 117.324 160.288 118.732 160.288 120.462C160.288 120.575 160.282 120.689 160.269 120.803C160.099 122.393 158.76 123.592 157.157 123.592L157.15 123.599ZM157.15 118.277C155.945 118.277 154.966 119.262 154.966 120.468C154.966 120.55 154.972 120.626 154.979 120.708C155.099 121.819 156.033 122.652 157.15 122.652C158.268 122.652 159.209 121.813 159.322 120.708C159.328 120.626 159.335 120.55 159.335 120.468C159.335 119.262 158.35 118.277 157.144 118.277H157.15Z"
                id="Path-3_5"
              />
              <path
                d="M155.415 114.641H142.713C142.455 114.641 142.24 114.427 142.24 114.168V113.101C142.24 111.586 143.47 110.355 144.986 110.355H153.035C154.606 110.355 155.881 111.63 155.881 113.202V114.174C155.881 114.433 155.667 114.648 155.408 114.648L155.415 114.641ZM143.193 113.694H154.941V113.195C154.941 112.147 154.089 111.295 153.041 111.295H144.992C144.001 111.295 143.193 112.103 143.193 113.095V113.688V113.694Z"
                id="Path-4_5"
              />
              <path
                d="M149.184 110.923C149.443 110.923 149.657 111.138 149.657 111.396V113.934C149.657 114.193 149.443 114.407 149.184 114.407C148.925 114.407 148.71 114.193 148.71 113.934V111.396C148.71 111.138 148.925 110.923 149.184 110.923Z"
                id="Path-5_5"
              />
            </g>
          </g>
        </g>
        <g id="Gruppe Steinfurter" opacity={getOpacity('steinfurter')}>
          <path
            d="M156.943 305.719V140.059"
            id="Pfad 599"
            stroke="#005B79"
            stroke-linecap="round"
            stroke-width="1.5"
          />
          <path
            d="M156.729 134.691C157.717 134.691 158.684 134.985 159.506 135.534C160.329 136.083 160.969 136.864 161.348 137.778C161.726 138.692 161.825 139.697 161.632 140.667C161.44 141.637 160.963 142.528 160.264 143.227C159.565 143.926 158.674 144.402 157.704 144.595C156.734 144.788 155.729 144.689 154.815 144.311C153.901 143.932 153.121 143.292 152.571 142.469C152.022 141.647 151.729 140.68 151.729 139.691C151.729 138.365 152.255 137.094 153.193 136.156C154.131 135.218 155.402 134.691 156.729 134.691Z"
            fill="#005B79"
            id="Pfad 600"
          />
        </g>
        <g id="Gruppe Warendorfer" opacity={getOpacity('warendorfer')}>
          <path
            d="M198.532 305.718V140.319"
            id="Pfad 604"
            stroke="#005B79"
            stroke-linecap="round"
            stroke-width="1.5"
          />
          <path
            d="M198.713 146.145C201.474 146.145 203.713 143.906 203.713 141.145C203.713 138.383 201.474 136.145 198.713 136.145C195.951 136.145 193.713 138.383 193.713 141.145C193.713 143.906 195.951 146.145 198.713 146.145Z"
            fill="#005B79"
            id="Ellipse 129"
          />
        </g>
      </g>
    </svg>
  )
}
