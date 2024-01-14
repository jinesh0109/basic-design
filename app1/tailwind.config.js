/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ['"General Sans", sans-serif']

    },
    extend: {
      borderColor:{
        blue: {
          grey:{
            100:'#CFD8DC',
            700:'#455A64'
          }
        }
      },
      boxShadow: {
        'header':'0px 0px 5px 0px #00000026'
      },
      fontSize: {
        'keyboard-downward-arrow': ['24px', {
          lineHeight: '18px',
          fontWeight: '500',
        }],
        'menu-item-icon': ['20px', {
          lineHeight: '23px',
          fontWeight: '500',
        }],
        'note-regular': ['12px', {
          lineHeight: '18px',
          fontWeight: '400',
        }],
        'note-medium': ['12px', {
          lineHeight: '18px',
          fontWeight: '500',
        }],
        'note-semibold': ['12px', {
          lineHeight: '18px',
          fontWeight: '600',
        }],
        'caption-regular': ['14px', {
          lineHeight: '21px',
          fontWeight: '400',
        }],
        'caption-medium': ['14px', {
          lineHeight: '21px',
          fontWeight: '500',
        }],
        'caption-semibold': ['14px', {
          lineHeight: '21px',
          fontWeight: '600',
        }],
        'body-1-regular': ['16px', {
          lineHeight: '24px',
          fontWeight: '400',
        }],
        'body-1-medium': ['16px', {
          lineHeight: '24px',
          fontWeight: '500',
        }],
        'body-1-semibold': ['16px', {
          lineHeight: '24px',
          fontWeight: '600',
        }],
        'body-2-regular': ['18px', {
          lineHeight: '27px',
          fontWeight: '400',
        }],
        'body-2-medium': ['18px', {
          lineHeight: '27px',
          fontWeight: '500',
        }],
        'body-2-semibold': ['18px', {
          lineHeight: '27px',
          fontWeight: '600',
        }],
        'subheading-1-regular': ['20px', {
          lineHeight: '30px',
          fontWeight: '400',
        }],
        'subheading-1-medium': ['20px', {
          lineHeight: '30px',
          fontWeight: '500',
        }],
        'subheading-1-semibold': ['20px', {
          lineHeight: '30px',
          fontWeight: '600',
        }],
        'subheading-2-regular': ['24px', {
          lineHeight: '36px',
          fontWeight: '400',
        }],
        'subheading-2-medium': ['24px', {
          lineHeight: '36px',
          fontWeight: '500',
        }],
        'subheading-2-semibold': ['24px', {
          lineHeight: '36px',
          fontWeight: '600',
        }],
        'title-regular': ['32px', {
          lineHeight: '48px',
          fontWeight: '400',
        }],
        'title-medium': ['32px', {
          lineHeight: '48px',
          fontWeight: '500',
        }],
        'title-semibold': ['32px', {
          lineHeight: '48px',
          fontWeight: '600',
        }],
        'headline-regular': ['36px', {
          lineHeight: '54px',
          fontWeight: '400',
        }],
        'headline-medium': ['36px', {
          lineHeight: '54px',
          fontWeight: '500',
        }],
        'headline-semibold': ['36px', {
          lineHeight: '54px',
          fontWeight: '600',
        }],
        'display-1-regular': ['40px', {
          lineHeight: '60px',
          fontWeight: '400',
        }],
        'display-1-medium': ['40px', {
          lineHeight: '60px',
          fontWeight: '500',
        }],
        'display-1-semibold': ['40px', {
          lineHeight: '60px',
          fontWeight: '600',
        }],
        'display-2-regular': ['48px', {
          lineHeight: '72px',
          fontWeight: '400',
        }],
        'display-2-medium': ['48px', {
          lineHeight: '72px',
          fontWeight: '500',
        }],
        'display-2-semibold': ['48px', {
          lineHeight: '72px',
          fontWeight: '600',
        }],
        'display-3-regular': ['52px', {
          lineHeight: '78px',
          fontWeight: '400',
        }],
        'display-3-medium': ['52px', {
          lineHeight: '78px',
          fontWeight: '500',
        }],
        'display-3-semibold': ['52px', {
          lineHeight: '78px',
          fontWeight: '600',
        }],
      },
      colors: {
        blue: { 
          grey:{
            10: '#F9FAFB',
            50: '#ECEFF1',
            100: '#CFD8DC',
            400: '#78909C',
            600:'#546E7A',
            700: '#455A64',
            900: '#263238'
          },
          
        },
        navy: {
          blue: {
            200: '#0062AB'
          }
        },
        other:{
          white: '#FFFFFF',
          red: '#D32F2F'
        },
        alert: {
          success: {
            900: '#5CB660',
            50: '#EDF7ED'
          },
          warning: {
            900:'#FF8F00',
            50:'#FFF9E7'
          },
          error: {
            50:'#FCE8E8',
            900:'#E51717'
          },
          general: '#094BFF'
        },
        primary: {
          0: "#000000",
          5: "#000C38",
          10: "#001550",
          15: "#001E67",
          20: "#00277F",
          25: "#003098",
          30: "#003AB2",
          35: "#0044CD",
          40: "#004EE8",
          50: "#396AFF",
          60: "#6789FF",
          70: "#90A7FF",
          80: "#B6C4FF",
          90: "#DCE1FF",
          95: "#EFF0FF",
          96: "#F3F2FF",
          98: "#FAF8FF",
          99: "#FEFBFF",
          100: "#FFFFFF"
      },
      "secondary": {
          0: "#000000",
          5: "#060F2D",
          10: "#111A38",
          15: "#1C2443",
          20: "#262F4E",
          25: "#323A5A",
          30: "#3D4566",
          35: "#495172",
          40: "#595D72",
          50: "#6D7699",
          60: "#878FB4",
          70: "#A2AACF",
          80: "#BDC5EC",
          90: "#DCE1FF",
          95: "#EFF0FF",
          98: "#FAF8FF",
          99: "#FEFBFF",
          100: "#FFFFFF"
      },
      "tertiary": {
          0: "#000000",
          5: "#260026",
          10: "#340733",
          15: "#40133E",
          20: "#4D1E4A",
          25: "#592955",
          30: "#663561",
          35: "#73406E",
          40: "#814C7A",
          50: "#9C6594",
          60: "#B87EAF",
          70: "#D598CB",
          80: "#F2B2E7",
          90: "#FFD7F5",
          95: "#FFEBF8",
          98: "#FFF7F9",
          99: "#FFFBFF",
          100: "#FFFFFF"
      },
      "neutral": {
          0: "#000000",
          5: "#101114",
          10: "#1B1B1F",
          15: "#252529",
          20: "#303034",
          25: "#3B3B3F",
          30: "#47464A",
          35: "#525256",
          40: "#5E5E62",
          50: "#77767A",
          60: "#919094",
          70: "#ACAAAF",
          80: "#C8C6CA",
          90: "#E4E1E6",
          94: "#EFEDF1",
          95: "#F2F0F4",
          98: "#FBF8FD",
          99: "#FEFBFF",
          100: "#FFFFFF"
      },
      "neutral-variant": {
          0: "#000000",
          5: "#0F1118",
          10: "#1A1B23",
          15: "#24252D",
          20: "#2F3038",
          25: "#3A3B43",
          30: "#45464F",
          35: "#51525B",
          40: "#5D5E67",
          45: "#F5F3F7",
          50: "#767680",
          60: "#90909A",
          70: "#AAAAB4",
          80: "#C6C5D0",
          90: "#E2E1EC",
          95: "#F0F0FA",
          98: "#FAF8FF",
          99: "#FEFBFF",
          100: "#FFFFFF"
      }
      }
    },
  },
  plugins: [

  ]
}

