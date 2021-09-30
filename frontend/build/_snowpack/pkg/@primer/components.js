import { o as objectAssign, c as createCommonjsModule, r as react } from '../common/index-f3ea7f7e.js';

// this file was prevaled
// This file needs to be a JavaScript file using CommonJS to be compatiable with preval
var themePreval = {
  "theme": {
    "animation": {
      "easeOutCubic": "cubic-bezier(0.33, 1, 0.68, 1)"
    },
    "borderWidths": [0, "1px"],
    "breakpoints": ["544px", "768px", "1012px", "1280px"],
    "fonts": {
      "normal": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
      "mono": "SFMono-Regular, Consolas, \"Liberation Mono\", Menlo, Courier, monospace"
    },
    "fontSizes": ["12px", "14px", "16px", "20px", "24px", "32px", "40px", "48px"],
    "fontWeights": {
      "light": 300,
      "normal": 400,
      "semibold": 500,
      "bold": 600
    },
    "lineHeights": {
      "condensedUltra": 1,
      "condensed": 1.25,
      "default": 1.5
    },
    "radii": ["0", "3px", "6px", "100px"],
    "sizes": {
      "small": "544px",
      "medium": "768px",
      "large": "1012px",
      "xlarge": "1280px"
    },
    "space": ["0", "4px", "8px", "16px", "24px", "32px", "40px", "48px", "64px", "80px", "96px", "112px", "128px"],
    "colorSchemes": {
      "light": {
        "colors": {
          "auto": {
            "black": "#1b1f24",
            "white": "#ffffff",
            "gray": ["#f6f8fa", "#eaeef2", "#d0d7de", "#afb8c1", "#8c959f", "#6e7781", "#57606a", "#424a53", "#32383f", "#24292f"],
            "blue": ["#ddf4ff", "#b6e3ff", "#80ccff", "#54aeff", "#218bff", "#0969da", "#0550ae", "#033d8b", "#0a3069", "#002155"],
            "green": ["#dafbe1", "#aceebb", "#6fdd8b", "#4ac26b", "#2da44e", "#1a7f37", "#116329", "#044f1e", "#003d16", "#002d11"],
            "yellow": ["#fff8c5", "#fae17d", "#eac54f", "#d4a72c", "#bf8700", "#9a6700", "#7d4e00", "#633c01", "#4d2d00", "#3b2300"],
            "orange": ["#fff1e5", "#ffd8b5", "#ffb77c", "#fb8f44", "#e16f24", "#bc4c00", "#953800", "#762c00", "#5c2200", "#471700"],
            "red": ["#FFEBE9", "#ffcecb", "#ffaba8", "#ff8182", "#fa4549", "#cf222e", "#a40e26", "#82071e", "#660018", "#4c0014"],
            "purple": ["#fbefff", "#ecd8ff", "#d8b9ff", "#c297ff", "#a475f9", "#8250df", "#6639ba", "#512a97", "#3e1f79", "#2e1461"],
            "pink": ["#ffeff7", "#ffd3eb", "#ffadda", "#ff80c8", "#e85aad", "#bf3989", "#99286e", "#772057", "#611347", "#4d0336"]
          },
          "text": {
            "primary": "#24292f",
            "secondary": "#57606a",
            "tertiary": "#57606a",
            "placeholder": "#6e7781",
            "disabled": "#57606a",
            "inverse": "#ffffff",
            "link": "#0969da",
            "danger": "#cf222e",
            "success": "#1a7f37",
            "warning": "#9a6700",
            "white": "#ffffff"
          },
          "icon": {
            "primary": "#24292f",
            "secondary": "#57606a",
            "tertiary": "#57606a",
            "info": "#0969da",
            "danger": "#cf222e",
            "success": "#1a7f37",
            "warning": "#9a6700"
          },
          "border": {
            "primary": "#d0d7de",
            "secondary": "hsla(210,18%,87%,1)",
            "tertiary": "#d0d7de",
            "overlay": "#d0d7de",
            "inverse": "#ffffff",
            "info": "#0969da",
            "danger": "#cf222e",
            "success": "#2da44e",
            "warning": "#bf8700",
            "default": "#d0d7de",
            "muted": "hsla(210,18%,87%,1)",
            "subtle": "rgba(27,31,36,0.15)"
          },
          "bg": {
            "canvas": "#ffffff",
            "canvasMobile": "rgba(0,0,0,0)",
            "canvasInverse": "#6e7781",
            "canvasInset": "#f6f8fa",
            "primary": "#ffffff",
            "secondary": "#f6f8fa",
            "tertiary": "#f6f8fa",
            "overlay": "#ffffff",
            "backdrop": "rgba(27,31,36,0.5)",
            "info": "#ddf4ff",
            "infoInverse": "#0969da",
            "danger": "#FFEBE9",
            "dangerInverse": "#cf222e",
            "success": "#dafbe1",
            "successInverse": "#2da44e",
            "warning": "#fff8c5",
            "warningInverse": "#bf8700"
          },
          "state": {
            "hover": {
              "primaryBg": "#0969da",
              "primaryBorder": "#0969da",
              "primaryText": "#ffffff",
              "primaryIcon": "#ffffff",
              "secondaryBg": "rgba(234,238,242,0.5)",
              "secondaryBorder": "rgba(234,238,242,0.5)"
            },
            "selected": {
              "primaryBg": "#0969da",
              "primaryBorder": "#0969da",
              "primaryText": "#ffffff",
              "primaryIcon": "#ffffff"
            },
            "focus": {
              "border": "#0969da"
            }
          },
          "fade": {
            "fg10": "rgba(27,31,36,0.1)",
            "fg15": "rgba(27,31,36,0.15)",
            "fg30": "rgba(27,31,36,0.3)",
            "fg50": "rgba(27,31,36,0.5)",
            "fg70": "rgba(27,31,36,0.7)",
            "fg85": "rgba(27,31,36,0.85)",
            "black10": "rgba(27,31,36,0.1)",
            "black15": "rgba(27,31,36,0.15)",
            "black30": "rgba(27,31,36,0.3)",
            "black50": "rgba(27,31,36,0.5)",
            "black70": "rgba(27,31,36,0.7)",
            "black85": "rgba(27,31,36,0.85)",
            "white10": "rgba(255,255,255,0.1)",
            "white15": "rgba(255,255,255,0.15)",
            "white30": "rgba(255,255,255,0.3)",
            "white50": "rgba(255,255,255,0.5)",
            "white70": "rgba(255,255,255,0.7)",
            "white85": "rgba(255,255,255,0.85)"
          },
          "alert": {
            "info": {
              "text": "#24292f",
              "icon": "#0969da",
              "bg": "#ddf4ff",
              "border": "rgba(84,174,255,0.4)"
            },
            "warn": {
              "text": "#24292f",
              "icon": "#9a6700",
              "bg": "#fff8c5",
              "border": "rgba(212,167,44,0.4)"
            },
            "error": {
              "text": "#24292f",
              "icon": "#cf222e",
              "bg": "#FFEBE9",
              "border": "rgba(255,129,130,0.4)"
            },
            "success": {
              "text": "#24292f",
              "icon": "#1a7f37",
              "bg": "#dafbe1",
              "border": "rgba(74,194,107,0.4)"
            }
          },
          "autocomplete": {
            "rowBorder": "hsla(210,18%,87%,1)"
          },
          "blankslate": {
            "icon": "#57606a"
          },
          "counter": {
            "text": "#24292f",
            "bg": "rgba(175,184,193,0.2)",
            "primary": {
              "text": "#ffffff",
              "bg": "#6e7781"
            },
            "secondary": {
              "text": "#57606a",
              "bg": "rgba(234,238,242,0.5)"
            }
          },
          "box": {
            "blueBorder": "rgba(84,174,255,0.4)",
            "rowYellowBg": "#fff8c5",
            "rowBlueBg": "#ddf4ff",
            "headerBlueBg": "#ddf4ff",
            "headerBlueBorder": "rgba(84,174,255,0.4)",
            "borderInfo": "rgba(84,174,255,0.4)",
            "bgInfo": "#ddf4ff",
            "borderWarning": "rgba(212,167,44,0.4)",
            "bgWarning": "#fff8c5"
          },
          "branchName": {
            "text": "#57606a",
            "icon": "#57606a",
            "bg": "#ddf4ff",
            "link": {
              "text": "#0969da",
              "icon": "#0969da",
              "bg": "#ddf4ff"
            }
          },
          "markdown": {
            "codeBg": "rgba(175,184,193,0.2)",
            "frameBorder": "#d0d7de",
            "blockquoteBorder": "#d0d7de",
            "tableBorder": "#d0d7de",
            "tableTrBorder": "hsla(210,18%,87%,1)"
          },
          "filterItem": {
            "barBg": "rgba(234,238,242,0.5)"
          },
          "hiddenTextExpander": {
            "bg": "rgba(175,184,193,0.2)",
            "bgHover": "rgba(84,174,255,0.4)"
          },
          "dragAndDrop": {
            "border": "#d0d7de"
          },
          "uploadEnabled": {
            "border": "#d0d7de",
            "borderFocused": "#0969da"
          },
          "previewableCommentForm": {
            "border": "#d0d7de"
          },
          "verifiedBadge": {
            "text": "#1a7f37",
            "bg": "#ffffff",
            "border": "#d0d7de"
          },
          "socialCount": {
            "bg": "#ffffff"
          },
          "tooltip": {
            "text": "#ffffff",
            "bg": "#24292f"
          },
          "filesExplorerIcon": "#0969da",
          "hlAuthorBg": "#ddf4ff",
          "hlAuthorBorder": "rgba(84,174,255,0.4)",
          "logoSubdued": "rgba(175,184,193,0.2)",
          "discussionBorder": "rgba(74,194,107,0.4)",
          "discussionBgSuccess": "#2da44e",
          "actionsWorkflowTableStickyBg": "rgba(255,255,255,0.95)",
          "repoLanguageColorBorder": "rgba(27,31,36,0.1)",
          "codeSelectionBg": "rgba(84,174,255,0.4)",
          "highlight": {
            "text": "#24292f",
            "bg": "#fff8c5"
          },
          "blob": {
            "lineHighlightBg": "#fff8c5",
            "lineHighlightBorder": "rgba(212,167,44,0.4)"
          },
          "topicTag": {
            "text": "#0969da",
            "bg": "#ddf4ff",
            "hoverBg": "#0969da",
            "activeBg": "#ddf4ff",
            "border": "rgba(0,0,0,0)"
          },
          "footerInvertocat": {
            "octicon": "#6e7781",
            "octiconHover": "#57606a"
          },
          "label": {
            "border": "#d0d7de",
            "primary": {
              "text": "#24292f",
              "border": "#6e7781"
            },
            "secondary": {
              "text": "#57606a",
              "border": "#d0d7de"
            },
            "info": {
              "text": "#0969da",
              "border": "#0969da"
            },
            "success": {
              "text": "#1a7f37",
              "border": "#2da44e"
            },
            "warning": {
              "text": "#9a6700",
              "border": "#bf8700"
            },
            "danger": {
              "text": "#cf222e",
              "border": "#cf222e"
            },
            "orange": {
              "text": "#bc4c00",
              "border": "#bc4c00"
            }
          },
          "input": {
            "bg": "#ffffff",
            "contrastBg": "#f6f8fa",
            "border": "#d0d7de",
            "disabledBorder": "#d0d7de",
            "warningBorder": "#bf8700",
            "errorBorder": "#cf222e",
            "tooltip": {
              "success": {
                "text": "#24292f",
                "bg": "#dafbe1",
                "border": "rgba(74,194,107,0.4)"
              },
              "warning": {
                "text": "#24292f",
                "bg": "#fff8c5",
                "border": "rgba(212,167,44,0.4)"
              },
              "error": {
                "text": "#24292f",
                "bg": "#FFEBE9",
                "border": "rgba(255,129,130,0.4)"
              }
            },
            "disabledBg": "rgba(175,184,193,0.2)"
          },
          "toast": {
            "text": "#24292f",
            "bg": "#ffffff",
            "border": "#d0d7de",
            "icon": "#ffffff",
            "iconBg": "#0969da",
            "iconBorder": "rgba(0,0,0,0)",
            "success": {
              "text": "#24292f",
              "border": "#d0d7de",
              "icon": "#ffffff",
              "iconBg": "#2da44e",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "warning": {
              "text": "#24292f",
              "border": "#d0d7de",
              "icon": "#24292f",
              "iconBg": "#bf8700",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "danger": {
              "text": "#24292f",
              "border": "#d0d7de",
              "icon": "#ffffff",
              "iconBg": "#cf222e",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "loading": {
              "text": "#24292f",
              "border": "#d0d7de",
              "icon": "#ffffff",
              "iconBg": "#6e7781",
              "iconBorder": "rgba(0,0,0,0)"
            }
          },
          "timeline": {
            "text": "#57606a",
            "badgeSuccessBorder": "rgba(0,0,0,0)",
            "targetBadgeBorder": "#0969da",
            "targetBadgeShadow": "rgba(84,174,255,0.4)",
            "badgeBg": "#eaeef2"
          },
          "diffstat": {
            "neutralBg": "rgba(175,184,193,0.2)",
            "neutralBorder": "rgba(27,31,36,0.15)",
            "deletionBorder": "rgba(27,31,36,0.15)",
            "additionBorder": "rgba(27,31,36,0.15)",
            "deletionBg": "#cf222e",
            "additionBg": "#2da44e"
          },
          "diff": {
            "addition": {
              "text": "#24292f",
              "bg": "#dafbe1",
              "border": "rgba(74,194,107,0.4)"
            },
            "deletion": {
              "text": "#24292f",
              "bg": "#FFEBE9",
              "border": "rgba(255,129,130,0.4)"
            },
            "change": {
              "text": "#9a6700",
              "bg": "#fff8c5",
              "border": "rgba(212,167,44,0.4)"
            }
          },
          "mergeBox": {
            "successIconBg": "#2da44e",
            "successIconText": "#ffffff",
            "successIconBorder": "rgba(0,0,0,0)",
            "successIndicatorBg": "#2da44e",
            "successIndicatorBorder": "rgba(0,0,0,0)",
            "mergedIconBg": "#8250df",
            "mergedIconText": "#ffffff",
            "mergedIconBorder": "rgba(0,0,0,0)",
            "mergedBoxBorder": "#8250df",
            "neutralIconBg": "#6e7781",
            "neutralIconText": "#ffffff",
            "neutralIconBorder": "rgba(0,0,0,0)",
            "neutralIndicatorBg": "#6e7781",
            "neutralIndicatorBorder": "rgba(0,0,0,0)",
            "warningIconBg": "#bf8700",
            "warningIconText": "#ffffff",
            "warningIconBorder": "rgba(0,0,0,0)",
            "warningBoxBorder": "#bf8700",
            "warningMergeHighlight": "rgba(0,0,0,0)",
            "errorIconBg": "#cf222e",
            "errorIconText": "#ffffff",
            "errorIconBorder": "rgba(0,0,0,0)",
            "errorIndicatorBg": "#cf222e",
            "errorIndicatorBorder": "rgba(0,0,0,0)"
          },
          "underlinenav": {
            "border": "rgba(0,0,0,0)",
            "borderHover": "rgba(175,184,193,0.2)",
            "borderActive": "#FD8C73",
            "text": "#24292f",
            "textHover": "#24292f",
            "textActive": "#24292f",
            "icon": "#6e7781",
            "iconHover": "#6e7781",
            "iconActive": "#24292f",
            "counterText": "#24292f",
            "counterBg": "rgba(175,184,193,0.2)"
          },
          "selectMenu": {
            "borderSecondary": "hsla(210,18%,87%,1)",
            "backdropBg": "rgba(27,31,36,0.5)",
            "backdropBorder": "rgba(0,0,0,0)",
            "tapHighlight": "rgba(175,184,193,0.5)",
            "tapFocusBg": "#b6e3ff"
          },
          "sidenav": {
            "borderActive": "#FD8C73",
            "selectedBg": "#ffffff"
          },
          "menu": {
            "headingText": "#24292f",
            "borderActive": "#FD8C73",
            "bgActive": "rgba(0,0,0,0)"
          },
          "project": {
            "cardBg": "#ffffff",
            "headerBg": "#24292f",
            "sidebarBg": "#ffffff",
            "gradientIn": "#ffffff",
            "gradientOut": "rgba(255,255,255,0)"
          },
          "prState": {
            "draft": {
              "text": "#ffffff",
              "bg": "#6e7781",
              "border": "rgba(0,0,0,0)"
            },
            "open": {
              "text": "#ffffff",
              "bg": "#2da44e",
              "border": "rgba(0,0,0,0)"
            },
            "merged": {
              "text": "#ffffff",
              "bg": "#8250df",
              "border": "rgba(0,0,0,0)"
            },
            "closed": {
              "text": "#ffffff",
              "bg": "#cf222e",
              "border": "rgba(0,0,0,0)"
            }
          },
          "diffBlob": {
            "numText": "#6e7781",
            "numHoverText": "#24292f",
            "addition": {
              "numHoverText": "#24292f",
              "numText": "#24292f",
              "fg": "#24292f",
              "numBg": "#CCFFD8",
              "lineBg": "#E6FFEC",
              "wordBg": "#ABF2BC"
            },
            "deletion": {
              "numHoverText": "#24292f",
              "numText": "#24292f",
              "fg": "#24292f",
              "numBg": "#FFD7D5",
              "lineBg": "#FFEBE9",
              "wordBg": "rgba(255,129,130,0.4)"
            },
            "hunk": {
              "text": "#57606a",
              "numBg": "rgba(84,174,255,0.4)",
              "lineBg": "#ddf4ff"
            },
            "emptyBlockBg": "rgba(234,238,242,0.5)",
            "selectedLineHighlightBg": "#fff8c5",
            "selectedLineHighlightBorder": "rgba(212,167,44,0.4)",
            "expander": {
              "hoverIcon": "#ffffff",
              "hoverBg": "#0969da",
              "icon": "#57606a"
            },
            "commentButton": {
              "icon": "#ffffff",
              "bg": "#0969da",
              "gradientBg": "rgba(0,0,0,0)"
            }
          },
          "globalNav": {
            "logo": "#ffffff",
            "bg": "#24292f",
            "text": "#ffffff",
            "icon": "#ffffff",
            "inputBg": "#f6f8fa",
            "inputBorder": "#f6f8fa",
            "inputIcon": "#afb8c1",
            "inputPlaceholder": "#8c959f"
          },
          "introShelf": {
            "gradientLeft": "#ddf4ff",
            "gradientRight": "#dafbe1",
            "gradientIn": "#ffffff",
            "gradientOut": "rgba(255,255,255,0)"
          },
          "canvasDefaultTransparent": "rgba(255,255,255,0)",
          "marketingIcon": {
            "primary": "#218bff",
            "secondary": "#54aeff"
          },
          "searchKeyword": {
            "hl": "#fff8c5"
          },
          "prettylights": {
            "syntax": {
              "comment": "#6e7781",
              "constant": "#0550ae",
              "entity": "#8250df",
              "storageModifierImport": "#24292f",
              "entityTag": "#116329",
              "keyword": "#cf222e",
              "string": "#0a3069",
              "variable": "#953800",
              "brackethighlighterUnmatched": "#82071e",
              "invalidIllegalText": "#f6f8fa",
              "invalidIllegalBg": "#82071e",
              "carriageReturnText": "#f6f8fa",
              "carriageReturnBg": "#cf222e",
              "stringRegexp": "#116329",
              "markupList": "#3b2300",
              "markupHeading": "#0550ae",
              "markupItalic": "#24292f",
              "markupBold": "#24292f",
              "markupDeletedText": "#82071e",
              "markupDeletedBg": "#FFEBE9",
              "markupInsertedText": "#116329",
              "markupInsertedBg": "#dafbe1",
              "markupChangedText": "#953800",
              "markupChangedBg": "#ffd8b5",
              "markupIgnoredText": "#eaeef2",
              "markupIgnoredBg": "#0550ae",
              "metaDiffRange": "#8250df",
              "brackethighlighterAngle": "#57606a",
              "sublimelinterGutterMark": "#8c959f",
              "constantOtherReferenceLink": "#0a3069"
            }
          },
          "codemirror": {
            "text": "#24292f",
            "bg": "#ffffff",
            "guttersBg": "#ffffff",
            "guttermarkerText": "#ffffff",
            "guttermarkerSubtleText": "#6e7781",
            "linenumberText": "#57606a",
            "cursor": "#24292f",
            "selectionBg": "rgba(84,174,255,0.4)",
            "activelineBg": "rgba(234,238,242,0.5)",
            "matchingbracketText": "#24292f",
            "linesBg": "#ffffff",
            "syntax": {
              "comment": "#24292f",
              "constant": "#0550ae",
              "entity": "#8250df",
              "keyword": "#cf222e",
              "storage": "#cf222e",
              "string": "#0a3069",
              "support": "#0550ae",
              "variable": "#953800"
            }
          },
          "checks": {
            "bg": "#24292f",
            "textPrimary": "#f6f8fa",
            "textSecondary": "#8c959f",
            "textLink": "#54aeff",
            "btnIcon": "#afb8c1",
            "btnHoverIcon": "#f6f8fa",
            "btnHoverBg": "rgba(255,255,255,0.125)",
            "inputText": "#eaeef2",
            "inputPlaceholderText": "#8c959f",
            "inputFocusText": "#8c959f",
            "inputBg": "#32383f",
            "donutError": "#fa4549",
            "donutPending": "#bf8700",
            "donutSuccess": "#2da44e",
            "donutNeutral": "#afb8c1",
            "dropdownText": "#afb8c1",
            "dropdownBg": "#32383f",
            "dropdownBorder": "#424a53",
            "dropdownShadow": "rgba(27,31,36,0.3)",
            "dropdownHoverText": "#f6f8fa",
            "dropdownHoverBg": "#424a53",
            "dropdownBtnHoverText": "#f6f8fa",
            "dropdownBtnHoverBg": "#32383f",
            "scrollbarThumbBg": "#57606a",
            "headerLabelText": "#d0d7de",
            "headerLabelOpenText": "#f6f8fa",
            "headerBorder": "#32383f",
            "headerIcon": "#8c959f",
            "lineText": "#d0d7de",
            "lineNumText": "rgba(140,149,159,0.75)",
            "lineTimestampText": "#8c959f",
            "lineHoverBg": "#32383f",
            "lineSelectedBg": "rgba(33,139,255,0.15)",
            "lineSelectedNumText": "#54aeff",
            "lineDtFmText": "#24292f",
            "lineDtFmBg": "#9a6700",
            "gateBg": "rgba(125,78,0,0.15)",
            "gateText": "#d0d7de",
            "gateWaitingText": "#afb8c1",
            "stepHeaderOpenBg": "#32383f",
            "stepErrorText": "#ff8182",
            "stepWarningText": "#d4a72c",
            "loglineText": "#8c959f",
            "loglineNumText": "rgba(140,149,159,0.75)",
            "loglineDebugText": "#c297ff",
            "loglineErrorText": "#d0d7de",
            "loglineErrorNumText": "#ff8182",
            "loglineErrorBg": "rgba(164,14,38,0.15)",
            "loglineWarningText": "#d0d7de",
            "loglineWarningNumText": "#d4a72c",
            "loglineWarningBg": "rgba(125,78,0,0.15)",
            "loglineCommandText": "#54aeff",
            "loglineSectionText": "#4ac26b",
            "ansi": {
              "black": "#24292f",
              "blackBright": "#32383f",
              "white": "#d0d7de",
              "whiteBright": "#d0d7de",
              "gray": "#8c959f",
              "red": "#ff8182",
              "redBright": "#ffaba8",
              "green": "#4ac26b",
              "greenBright": "#6fdd8b",
              "yellow": "#d4a72c",
              "yellowBright": "#eac54f",
              "blue": "#54aeff",
              "blueBright": "#80ccff",
              "magenta": "#c297ff",
              "magentaBright": "#d8b9ff",
              "cyan": "#76e3ea",
              "cyanBright": "#b3f0ff"
            }
          },
          "mktg": {
            "success": "rgba(36,146,67,1)",
            "info": "rgba(19,119,234,1)",
            "bgShadeGradient": {
              "top": "rgba(27,31,36,0.065)",
              "bottom": "rgba(27,31,36,0)"
            },
            "btn": {
              "bg": {
                "top": "hsla(228,82%,66%,1)",
                "bottom": "#4969ed"
              },
              "bgOverlay": {
                "top": "hsla(228,74%,59%,1)",
                "bottom": "#3355e0"
              },
              "text": "#ffffff",
              "primary": {
                "bg": {
                  "top": "hsla(137,56%,46%,1)",
                  "bottom": "#2ea44f"
                },
                "bgOverlay": {
                  "top": "hsla(134,60%,38%,1)",
                  "bottom": "#22863a"
                },
                "text": "#ffffff"
              },
              "enterprise": {
                "bg": {
                  "top": "hsla(249,100%,72%,1)",
                  "bottom": "#6f57ff"
                },
                "bgOverlay": {
                  "top": "hsla(248,65%,63%,1)",
                  "bottom": "#614eda"
                },
                "text": "#ffffff"
              },
              "outline": {
                "text": "#4969ed",
                "border": "rgba(73,105,237,0.3)",
                "hover": {
                  "text": "#3355e0",
                  "border": "rgba(51,85,224,0.5)"
                },
                "focus": {
                  "border": "#4969ed",
                  "borderInset": "rgba(73,105,237,0.5)"
                }
              },
              "dark": {
                "text": "#ffffff",
                "border": "rgba(255,255,255,0.3)",
                "hover": {
                  "text": "#ffffff",
                  "border": "rgba(255,255,255,0.5)"
                },
                "focus": {
                  "border": "#ffffff",
                  "borderInset": "rgba(255,255,255,0.5)"
                }
              }
            }
          },
          "avatar": {
            "bg": "#ffffff",
            "border": "rgba(27,31,36,0.15)",
            "stackFade": "#afb8c1",
            "stackFadeMore": "#d0d7de"
          },
          "header": {
            "text": "rgba(255,255,255,0.7)",
            "bg": "#24292f",
            "logo": "#ffffff"
          },
          "headerSearch": {
            "bg": "#24292f",
            "border": "#57606a"
          },
          "ansi": {
            "black": "#24292f",
            "blackBright": "#57606a",
            "white": "#6e7781",
            "whiteBright": "#8c959f",
            "gray": "#6e7781",
            "red": "#cf222e",
            "redBright": "#a40e26",
            "green": "#116329",
            "greenBright": "#1a7f37",
            "yellow": "#4d2d00",
            "yellowBright": "#633c01",
            "blue": "#0969da",
            "blueBright": "#218bff",
            "magenta": "#8250df",
            "magentaBright": "#a475f9",
            "cyan": "#1b7c83",
            "cyanBright": "#3192aa"
          },
          "btn": {
            "text": "#24292f",
            "bg": "#f6f8fa",
            "border": "rgba(27,31,36,0.15)",
            "hoverBg": "#f3f4f6",
            "hoverBorder": "rgba(27,31,36,0.15)",
            "activeBg": "hsla(220,14%,93%,1)",
            "activeBorder": "rgba(27,31,36,0.15)",
            "selectedBg": "hsla(220,14%,94%,1)",
            "focusBg": "#f6f8fa",
            "focusBorder": "rgba(27,31,36,0.15)",
            "counterBg": "rgba(27,31,36,0.08)",
            "primary": {
              "text": "#ffffff",
              "bg": "#2da44e",
              "border": "rgba(27,31,36,0.15)",
              "hoverBg": "#2c974b",
              "hoverBorder": "rgba(27,31,36,0.15)",
              "selectedBg": "hsla(137,55%,36%,1)",
              "disabledText": "rgba(255,255,255,0.8)",
              "disabledBg": "#94d3a2",
              "disabledBorder": "rgba(27,31,36,0.15)",
              "focusBg": "#2da44e",
              "focusBorder": "rgba(27,31,36,0.15)",
              "icon": "rgba(255,255,255,0.8)",
              "counterBg": "rgba(255,255,255,0.2)"
            },
            "outline": {
              "text": "#0969da",
              "hoverText": "#ffffff",
              "hoverBg": "#0969da",
              "hoverBorder": "rgba(27,31,36,0.15)",
              "hoverCounterBg": "rgba(255,255,255,0.2)",
              "selectedText": "#ffffff",
              "selectedBg": "hsla(212,92%,42%,1)",
              "selectedBorder": "rgba(27,31,36,0.15)",
              "disabledText": "rgba(9,105,218,0.5)",
              "disabledBg": "#f6f8fa",
              "disabledCounterBg": "rgba(9,105,218,0.05)",
              "focusBorder": "rgba(27,31,36,0.15)",
              "counterBg": "rgba(9,105,218,0.1)"
            },
            "danger": {
              "text": "#cf222e",
              "hoverText": "#ffffff",
              "hoverBg": "#a40e26",
              "hoverBorder": "rgba(27,31,36,0.15)",
              "hoverCounterBg": "rgba(255,255,255,0.2)",
              "selectedText": "#ffffff",
              "selectedBg": "hsla(356,72%,44%,1)",
              "selectedBorder": "rgba(27,31,36,0.15)",
              "disabledText": "rgba(207,34,46,0.5)",
              "disabledBg": "#f6f8fa",
              "disabledCounterBg": "rgba(207,34,46,0.05)",
              "focusBorder": "rgba(27,31,36,0.15)",
              "counterBg": "rgba(207,34,46,0.1)",
              "icon": "#cf222e",
              "hoverIcon": "#ffffff"
            }
          },
          "fg": {
            "default": "#24292f",
            "muted": "#57606a",
            "subtle": "#6e7781",
            "onEmphasis": "#ffffff"
          },
          "canvas": {
            "default": "#ffffff",
            "overlay": "#ffffff",
            "inset": "#f6f8fa",
            "subtle": "#f6f8fa"
          },
          "neutral": {
            "emphasisPlus": "#24292f",
            "emphasis": "#6e7781",
            "muted": "rgba(175,184,193,0.2)",
            "subtle": "rgba(234,238,242,0.5)"
          },
          "accent": {
            "fg": "#0969da",
            "emphasis": "#0969da",
            "muted": "rgba(84,174,255,0.4)",
            "subtle": "#ddf4ff"
          },
          "success": {
            "fg": "#1a7f37",
            "emphasis": "#2da44e",
            "muted": "rgba(74,194,107,0.4)",
            "subtle": "#dafbe1"
          },
          "attention": {
            "fg": "#9a6700",
            "emphasis": "#bf8700",
            "muted": "rgba(212,167,44,0.4)",
            "subtle": "#fff8c5"
          },
          "severe": {
            "fg": "#bc4c00",
            "emphasis": "#bc4c00",
            "muted": "rgba(251,143,68,0.4)",
            "subtle": "#fff1e5"
          },
          "danger": {
            "fg": "#cf222e",
            "emphasis": "#cf222e",
            "muted": "rgba(255,129,130,0.4)",
            "subtle": "#FFEBE9"
          },
          "done": {
            "fg": "#8250df",
            "emphasis": "#8250df",
            "muted": "rgba(194,151,255,0.4)",
            "subtle": "#fbefff"
          },
          "sponsors": {
            "fg": "#bf3989",
            "emphasis": "#bf3989",
            "muted": "rgba(255,128,200,0.4)",
            "subtle": "#ffeff7"
          },
          "primer": {
            "canvas": {
              "backdrop": "rgba(27,31,36,0.5)",
              "sticky": "rgba(255,255,255,0.95)"
            },
            "border": {
              "active": "#FD8C73",
              "contrast": "rgba(27,31,36,0.1)"
            }
          }
        },
        "shadows": {
          "shadow": {
            "highlight": "inset 0 1px 0 rgba(255,255,255,0.25)",
            "inset": "inset 0 1px 0 rgba(208,215,222,0.2)",
            "small": "0 1px 0 rgba(27,31,36,0.04)",
            "medium": "0 3px 6px rgba(140,149,159,0.15)",
            "large": "0 8px 24px rgba(140,149,159,0.2)",
            "extraLarge": "0 12px 28px rgba(140,149,159,0.3)"
          },
          "state": {
            "focus": {
              "shadow": "0 0 0 3px rgba(9,105,218,0.3)"
            }
          },
          "autocomplete": {
            "shadow": "0 3px 6px rgba(140,149,159,0.15)"
          },
          "dropdown": {
            "shadow": "0 8px 24px rgba(140,149,159,0.2)"
          },
          "input": {
            "shadow": "inset 0 1px 0 rgba(208,215,222,0.2)"
          },
          "toast": {
            "shadow": "0 8px 24px rgba(140,149,159,0.2)"
          },
          "selectMenu": {
            "shadow": "0 8px 24px rgba(140,149,159,0.2)"
          },
          "avatar": {
            "childShadow": "-2px -2px 0 rgba(255,255,255,0.8)"
          },
          "overlay": {
            "shadow": "0 1px 3px rgba(27,31,36,0.12), 0 8px 24px rgba(66,74,83,0.12)"
          },
          "btn": {
            "shadow": "0 1px 0 rgba(27,31,36,0.04)",
            "insetShadow": "inset 0 1px 0 rgba(255,255,255,0.25)",
            "focusShadow": "0 0 0 3px rgba(9,105,218,0.3)",
            "shadowActive": "inset 0 0.15em 0.3em rgba(27,31,36,0.15)",
            "shadowInputFocus": "0 0 0 0.2em rgba(9,105,218,0.3)",
            "primary": {
              "shadow": "0 1px 0 rgba(27,31,36,0.1)",
              "insetShadow": "inset 0 1px 0 rgba(255,255,255,0.03)",
              "selectedShadow": "inset 0 1px 0 rgba(0,45,17,0.2)",
              "focusShadow": "0 0 0 3px rgba(45,164,78,0.4)"
            },
            "outline": {
              "hoverShadow": "0 1px 0 rgba(27,31,36,0.1)",
              "hoverInsetShadow": "inset 0 1px 0 rgba(255,255,255,0.03)",
              "selectedShadow": "inset 0 1px 0 rgba(0,33,85,0.2)",
              "focusShadow": "0 0 0 3px rgba(5,80,174,0.4)"
            },
            "danger": {
              "hoverShadow": "0 1px 0 rgba(27,31,36,0.1)",
              "hoverInsetShadow": "inset 0 1px 0 rgba(255,255,255,0.03)",
              "selectedShadow": "inset 0 1px 0 rgba(76,0,20,0.2)",
              "focusShadow": "0 0 0 3px rgba(164,14,38,0.4)"
            }
          },
          "primer": {
            "shadow": {
              "highlight": "inset 0 1px 0 rgba(255,255,255,0.25)",
              "inset": "inset 0 1px 0 rgba(208,215,222,0.2)",
              "focus": "0 0 0 3px rgba(9,105,218,0.3)"
            }
          }
        }
      },
      "light_protanopia": {
        "colors": {
          "auto": {
            "black": "#1b1f24",
            "white": "#ffffff",
            "gray": ["#f6f8fa", "#eaeef2", "#d0d7de", "#afb8c1", "#8c959f", "#6e7781", "#57606a", "#424a53", "#32383f", "#24292f"],
            "blue": ["#ddf4ff", "#b6e3ff", "#80ccff", "#54aeff", "#218bff", "#0969da", "#0550ae", "#033d8b", "#0a3069", "#002155"],
            "green": ["#c0f6ff", "#96e5ff", "#65ccff", "#35adff", "#0088ff", "#0566d5", "#054da9", "#033a86", "#002d68", "#001f50"],
            "yellow": ["#fff8c5", "#fae17d", "#eac54f", "#d4a72c", "#bf8700", "#9a6700", "#7d4e00", "#633c01", "#4d2d00", "#3b2300"],
            "orange": ["#fff1e5", "#ffd8b5", "#ffb77c", "#fb8f44", "#e16f24", "#bc4c00", "#953800", "#762c00", "#5c2200", "#471700"],
            "red": ["#fefe48", "#fee325", "#f8c200", "#e7a100", "#d08002", "#ac5e00", "#8b4600", "#6c3900", "#4c3100", "#2f2900"],
            "purple": ["#fbefff", "#ecd8ff", "#d8b9ff", "#c297ff", "#a475f9", "#8250df", "#6639ba", "#512a97", "#3e1f79", "#2e1461"],
            "pink": ["#ffeff7", "#ffd3eb", "#ffadda", "#ff80c8", "#e85aad", "#bf3989", "#99286e", "#772057", "#611347", "#4d0336"]
          },
          "text": {
            "primary": "#24292f",
            "secondary": "#57606a",
            "tertiary": "#57606a",
            "placeholder": "#6e7781",
            "disabled": "#57606a",
            "inverse": "#ffffff",
            "link": "#0969da",
            "danger": "#ac5e00",
            "success": "#0566d5",
            "warning": "#9a6700",
            "white": "#ffffff"
          },
          "icon": {
            "primary": "#24292f",
            "secondary": "#57606a",
            "tertiary": "#57606a",
            "info": "#0969da",
            "danger": "#ac5e00",
            "success": "#0566d5",
            "warning": "#9a6700"
          },
          "border": {
            "primary": "#d0d7de",
            "secondary": "hsla(210,18%,87%,1)",
            "tertiary": "#d0d7de",
            "overlay": "#d0d7de",
            "inverse": "#ffffff",
            "info": "#0969da",
            "danger": "#ac5e00",
            "success": "#0088ff",
            "warning": "#bf8700",
            "default": "#d0d7de",
            "muted": "hsla(210,18%,87%,1)",
            "subtle": "rgba(27,31,36,0.15)"
          },
          "bg": {
            "canvas": "#ffffff",
            "canvasMobile": "rgba(0,0,0,0)",
            "canvasInverse": "#6e7781",
            "canvasInset": "#f6f8fa",
            "primary": "#ffffff",
            "secondary": "#f6f8fa",
            "tertiary": "#f6f8fa",
            "overlay": "#ffffff",
            "backdrop": "rgba(27,31,36,0.5)",
            "info": "#ddf4ff",
            "infoInverse": "#0969da",
            "danger": "#fefe48",
            "dangerInverse": "#ac5e00",
            "success": "#c0f6ff",
            "successInverse": "#0088ff",
            "warning": "#fff8c5",
            "warningInverse": "#bf8700"
          },
          "state": {
            "hover": {
              "primaryBg": "#0969da",
              "primaryBorder": "#0969da",
              "primaryText": "#ffffff",
              "primaryIcon": "#ffffff",
              "secondaryBg": "rgba(234,238,242,0.5)",
              "secondaryBorder": "rgba(234,238,242,0.5)"
            },
            "selected": {
              "primaryBg": "#0969da",
              "primaryBorder": "#0969da",
              "primaryText": "#ffffff",
              "primaryIcon": "#ffffff"
            },
            "focus": {
              "border": "#0969da"
            }
          },
          "fade": {
            "fg10": "rgba(27,31,36,0.1)",
            "fg15": "rgba(27,31,36,0.15)",
            "fg30": "rgba(27,31,36,0.3)",
            "fg50": "rgba(27,31,36,0.5)",
            "fg70": "rgba(27,31,36,0.7)",
            "fg85": "rgba(27,31,36,0.85)",
            "black10": "rgba(27,31,36,0.1)",
            "black15": "rgba(27,31,36,0.15)",
            "black30": "rgba(27,31,36,0.3)",
            "black50": "rgba(27,31,36,0.5)",
            "black70": "rgba(27,31,36,0.7)",
            "black85": "rgba(27,31,36,0.85)",
            "white10": "rgba(255,255,255,0.1)",
            "white15": "rgba(255,255,255,0.15)",
            "white30": "rgba(255,255,255,0.3)",
            "white50": "rgba(255,255,255,0.5)",
            "white70": "rgba(255,255,255,0.7)",
            "white85": "rgba(255,255,255,0.85)"
          },
          "alert": {
            "info": {
              "text": "#24292f",
              "icon": "#0969da",
              "bg": "#ddf4ff",
              "border": "rgba(84,174,255,0.4)"
            },
            "warn": {
              "text": "#24292f",
              "icon": "#9a6700",
              "bg": "#fff8c5",
              "border": "rgba(212,167,44,0.4)"
            },
            "error": {
              "text": "#24292f",
              "icon": "#ac5e00",
              "bg": "#fefe48",
              "border": "rgba(231,161,0,0.4)"
            },
            "success": {
              "text": "#24292f",
              "icon": "#0566d5",
              "bg": "#c0f6ff",
              "border": "rgba(53,173,255,0.4)"
            }
          },
          "autocomplete": {
            "rowBorder": "hsla(210,18%,87%,1)"
          },
          "blankslate": {
            "icon": "#57606a"
          },
          "counter": {
            "text": "#24292f",
            "bg": "rgba(175,184,193,0.2)",
            "primary": {
              "text": "#ffffff",
              "bg": "#6e7781"
            },
            "secondary": {
              "text": "#57606a",
              "bg": "rgba(234,238,242,0.5)"
            }
          },
          "box": {
            "blueBorder": "rgba(84,174,255,0.4)",
            "rowYellowBg": "#fff8c5",
            "rowBlueBg": "#ddf4ff",
            "headerBlueBg": "#ddf4ff",
            "headerBlueBorder": "rgba(84,174,255,0.4)",
            "borderInfo": "rgba(84,174,255,0.4)",
            "bgInfo": "#ddf4ff",
            "borderWarning": "rgba(212,167,44,0.4)",
            "bgWarning": "#fff8c5"
          },
          "branchName": {
            "text": "#57606a",
            "icon": "#57606a",
            "bg": "#ddf4ff",
            "link": {
              "text": "#0969da",
              "icon": "#0969da",
              "bg": "#ddf4ff"
            }
          },
          "markdown": {
            "codeBg": "rgba(175,184,193,0.2)",
            "frameBorder": "#d0d7de",
            "blockquoteBorder": "#d0d7de",
            "tableBorder": "#d0d7de",
            "tableTrBorder": "hsla(210,18%,87%,1)"
          },
          "filterItem": {
            "barBg": "rgba(234,238,242,0.5)"
          },
          "hiddenTextExpander": {
            "bg": "rgba(175,184,193,0.2)",
            "bgHover": "rgba(84,174,255,0.4)"
          },
          "dragAndDrop": {
            "border": "#d0d7de"
          },
          "uploadEnabled": {
            "border": "#d0d7de",
            "borderFocused": "#0969da"
          },
          "previewableCommentForm": {
            "border": "#d0d7de"
          },
          "verifiedBadge": {
            "text": "#0566d5",
            "bg": "#ffffff",
            "border": "#d0d7de"
          },
          "socialCount": {
            "bg": "#ffffff"
          },
          "tooltip": {
            "text": "#ffffff",
            "bg": "#24292f"
          },
          "filesExplorerIcon": "#0969da",
          "hlAuthorBg": "#ddf4ff",
          "hlAuthorBorder": "rgba(84,174,255,0.4)",
          "logoSubdued": "rgba(175,184,193,0.2)",
          "discussionBorder": "rgba(53,173,255,0.4)",
          "discussionBgSuccess": "#0088ff",
          "actionsWorkflowTableStickyBg": "rgba(255,255,255,0.95)",
          "repoLanguageColorBorder": "rgba(27,31,36,0.1)",
          "codeSelectionBg": "rgba(84,174,255,0.4)",
          "highlight": {
            "text": "#24292f",
            "bg": "#fff8c5"
          },
          "blob": {
            "lineHighlightBg": "#fff8c5",
            "lineHighlightBorder": "rgba(212,167,44,0.4)"
          },
          "topicTag": {
            "text": "#0969da",
            "bg": "#ddf4ff",
            "hoverBg": "#0969da",
            "activeBg": "#ddf4ff",
            "border": "rgba(0,0,0,0)"
          },
          "footerInvertocat": {
            "octicon": "#6e7781",
            "octiconHover": "#57606a"
          },
          "label": {
            "border": "#d0d7de",
            "primary": {
              "text": "#24292f",
              "border": "#6e7781"
            },
            "secondary": {
              "text": "#57606a",
              "border": "#d0d7de"
            },
            "info": {
              "text": "#0969da",
              "border": "#0969da"
            },
            "success": {
              "text": "#0566d5",
              "border": "#0088ff"
            },
            "warning": {
              "text": "#9a6700",
              "border": "#bf8700"
            },
            "danger": {
              "text": "#ac5e00",
              "border": "#ac5e00"
            },
            "orange": {
              "text": "#bc4c00",
              "border": "#bc4c00"
            }
          },
          "input": {
            "bg": "#ffffff",
            "contrastBg": "#f6f8fa",
            "border": "#d0d7de",
            "disabledBorder": "#d0d7de",
            "warningBorder": "#bf8700",
            "errorBorder": "#ac5e00",
            "tooltip": {
              "success": {
                "text": "#24292f",
                "bg": "#c0f6ff",
                "border": "rgba(53,173,255,0.4)"
              },
              "warning": {
                "text": "#24292f",
                "bg": "#fff8c5",
                "border": "rgba(212,167,44,0.4)"
              },
              "error": {
                "text": "#24292f",
                "bg": "#fefe48",
                "border": "rgba(231,161,0,0.4)"
              }
            },
            "disabledBg": "rgba(175,184,193,0.2)"
          },
          "toast": {
            "text": "#24292f",
            "bg": "#ffffff",
            "border": "#d0d7de",
            "icon": "#ffffff",
            "iconBg": "#0969da",
            "iconBorder": "rgba(0,0,0,0)",
            "success": {
              "text": "#24292f",
              "border": "#d0d7de",
              "icon": "#ffffff",
              "iconBg": "#0088ff",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "warning": {
              "text": "#24292f",
              "border": "#d0d7de",
              "icon": "#24292f",
              "iconBg": "#bf8700",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "danger": {
              "text": "#24292f",
              "border": "#d0d7de",
              "icon": "#ffffff",
              "iconBg": "#ac5e00",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "loading": {
              "text": "#24292f",
              "border": "#d0d7de",
              "icon": "#ffffff",
              "iconBg": "#6e7781",
              "iconBorder": "rgba(0,0,0,0)"
            }
          },
          "timeline": {
            "text": "#57606a",
            "badgeSuccessBorder": "rgba(0,0,0,0)",
            "targetBadgeBorder": "#0969da",
            "targetBadgeShadow": "rgba(84,174,255,0.4)",
            "badgeBg": "#eaeef2"
          },
          "diffstat": {
            "neutralBg": "rgba(175,184,193,0.2)",
            "neutralBorder": "rgba(27,31,36,0.15)",
            "deletionBorder": "rgba(27,31,36,0.15)",
            "additionBorder": "rgba(27,31,36,0.15)",
            "deletionBg": "#ac5e00",
            "additionBg": "#0088ff"
          },
          "diff": {
            "addition": {
              "text": "#24292f",
              "bg": "#c0f6ff",
              "border": "rgba(53,173,255,0.4)"
            },
            "deletion": {
              "text": "#24292f",
              "bg": "#fefe48",
              "border": "rgba(231,161,0,0.4)"
            },
            "change": {
              "text": "#9a6700",
              "bg": "#fff8c5",
              "border": "rgba(212,167,44,0.4)"
            }
          },
          "mergeBox": {
            "successIconBg": "#0088ff",
            "successIconText": "#ffffff",
            "successIconBorder": "rgba(0,0,0,0)",
            "successIndicatorBg": "#0088ff",
            "successIndicatorBorder": "rgba(0,0,0,0)",
            "mergedIconBg": "#8250df",
            "mergedIconText": "#ffffff",
            "mergedIconBorder": "rgba(0,0,0,0)",
            "mergedBoxBorder": "#8250df",
            "neutralIconBg": "#6e7781",
            "neutralIconText": "#ffffff",
            "neutralIconBorder": "rgba(0,0,0,0)",
            "neutralIndicatorBg": "#6e7781",
            "neutralIndicatorBorder": "rgba(0,0,0,0)",
            "warningIconBg": "#bf8700",
            "warningIconText": "#ffffff",
            "warningIconBorder": "rgba(0,0,0,0)",
            "warningBoxBorder": "#bf8700",
            "warningMergeHighlight": "rgba(0,0,0,0)",
            "errorIconBg": "#ac5e00",
            "errorIconText": "#ffffff",
            "errorIconBorder": "rgba(0,0,0,0)",
            "errorIndicatorBg": "#ac5e00",
            "errorIndicatorBorder": "rgba(0,0,0,0)"
          },
          "underlinenav": {
            "border": "rgba(0,0,0,0)",
            "borderHover": "rgba(175,184,193,0.2)",
            "borderActive": "#FD8C73",
            "text": "#24292f",
            "textHover": "#24292f",
            "textActive": "#24292f",
            "icon": "#6e7781",
            "iconHover": "#6e7781",
            "iconActive": "#24292f",
            "counterText": "#24292f",
            "counterBg": "rgba(175,184,193,0.2)"
          },
          "selectMenu": {
            "borderSecondary": "hsla(210,18%,87%,1)",
            "backdropBg": "rgba(27,31,36,0.5)",
            "backdropBorder": "rgba(0,0,0,0)",
            "tapHighlight": "rgba(175,184,193,0.5)",
            "tapFocusBg": "#b6e3ff"
          },
          "sidenav": {
            "borderActive": "#FD8C73",
            "selectedBg": "#ffffff"
          },
          "menu": {
            "headingText": "#24292f",
            "borderActive": "#FD8C73",
            "bgActive": "rgba(0,0,0,0)"
          },
          "project": {
            "cardBg": "#ffffff",
            "headerBg": "#24292f",
            "sidebarBg": "#ffffff",
            "gradientIn": "#ffffff",
            "gradientOut": "rgba(255,255,255,0)"
          },
          "prState": {
            "draft": {
              "text": "#ffffff",
              "bg": "#6e7781",
              "border": "rgba(0,0,0,0)"
            },
            "open": {
              "text": "#ffffff",
              "bg": "#0088ff",
              "border": "rgba(0,0,0,0)"
            },
            "merged": {
              "text": "#ffffff",
              "bg": "#8250df",
              "border": "rgba(0,0,0,0)"
            },
            "closed": {
              "text": "#ffffff",
              "bg": "#ac5e00",
              "border": "rgba(0,0,0,0)"
            }
          },
          "diffBlob": {
            "numText": "#6e7781",
            "numHoverText": "#24292f",
            "addition": {
              "numHoverText": "#24292f",
              "numText": "#24292f",
              "fg": "#24292f",
              "numBg": "rgba(53,173,255,0.4)",
              "lineBg": "rgba(192,246,255,0.5)",
              "wordBg": "rgba(53,173,255,0.4)"
            },
            "deletion": {
              "numHoverText": "#24292f",
              "numText": "#24292f",
              "fg": "#24292f",
              "numBg": "rgba(231,161,0,0.4)",
              "lineBg": "rgba(254,254,72,0.5)",
              "wordBg": "rgba(248,194,0,0.5)"
            },
            "hunk": {
              "text": "#57606a",
              "numBg": "rgba(84,174,255,0.4)",
              "lineBg": "#ddf4ff"
            },
            "emptyBlockBg": "rgba(234,238,242,0.5)",
            "selectedLineHighlightBg": "#fff8c5",
            "selectedLineHighlightBorder": "rgba(212,167,44,0.4)",
            "expander": {
              "hoverIcon": "#ffffff",
              "hoverBg": "#0969da",
              "icon": "#57606a"
            },
            "commentButton": {
              "icon": "#ffffff",
              "bg": "#0969da",
              "gradientBg": "rgba(0,0,0,0)"
            }
          },
          "globalNav": {
            "logo": "#ffffff",
            "bg": "#24292f",
            "text": "#ffffff",
            "icon": "#ffffff",
            "inputBg": "#f6f8fa",
            "inputBorder": "#f6f8fa",
            "inputIcon": "#afb8c1",
            "inputPlaceholder": "#8c959f"
          },
          "introShelf": {
            "gradientLeft": "#ddf4ff",
            "gradientRight": "#c0f6ff",
            "gradientIn": "#ffffff",
            "gradientOut": "rgba(255,255,255,0)"
          },
          "canvasDefaultTransparent": "rgba(255,255,255,0)",
          "marketingIcon": {
            "primary": "#218bff",
            "secondary": "#54aeff"
          },
          "searchKeyword": {
            "hl": "#fff8c5"
          },
          "prettylights": {
            "syntax": {
              "comment": "#6e7781",
              "constant": "#0550ae",
              "entity": "#8250df",
              "storageModifierImport": "#24292f",
              "entityTag": "#054da9",
              "keyword": "#ac5e00",
              "string": "#0a3069",
              "variable": "#953800",
              "brackethighlighterUnmatched": "#6c3900",
              "invalidIllegalText": "#f6f8fa",
              "invalidIllegalBg": "#6c3900",
              "carriageReturnText": "#f6f8fa",
              "carriageReturnBg": "#ac5e00",
              "stringRegexp": "#054da9",
              "markupList": "#3b2300",
              "markupHeading": "#0550ae",
              "markupItalic": "#24292f",
              "markupBold": "#24292f",
              "markupDeletedText": "#6c3900",
              "markupDeletedBg": "#fefe48",
              "markupInsertedText": "#054da9",
              "markupInsertedBg": "#c0f6ff",
              "markupChangedText": "#953800",
              "markupChangedBg": "#ffd8b5",
              "markupIgnoredText": "#eaeef2",
              "markupIgnoredBg": "#0550ae",
              "metaDiffRange": "#8250df",
              "brackethighlighterAngle": "#57606a",
              "sublimelinterGutterMark": "#8c959f",
              "constantOtherReferenceLink": "#0a3069"
            }
          },
          "codemirror": {
            "text": "#24292f",
            "bg": "#ffffff",
            "guttersBg": "#ffffff",
            "guttermarkerText": "#ffffff",
            "guttermarkerSubtleText": "#6e7781",
            "linenumberText": "#57606a",
            "cursor": "#24292f",
            "selectionBg": "rgba(84,174,255,0.4)",
            "activelineBg": "rgba(234,238,242,0.5)",
            "matchingbracketText": "#24292f",
            "linesBg": "#ffffff",
            "syntax": {
              "comment": "#24292f",
              "constant": "#0550ae",
              "entity": "#8250df",
              "keyword": "#ac5e00",
              "storage": "#ac5e00",
              "string": "#0a3069",
              "support": "#0550ae",
              "variable": "#953800"
            }
          },
          "checks": {
            "bg": "#24292f",
            "textPrimary": "#f6f8fa",
            "textSecondary": "#8c959f",
            "textLink": "#54aeff",
            "btnIcon": "#afb8c1",
            "btnHoverIcon": "#f6f8fa",
            "btnHoverBg": "rgba(255,255,255,0.125)",
            "inputText": "#eaeef2",
            "inputPlaceholderText": "#8c959f",
            "inputFocusText": "#8c959f",
            "inputBg": "#32383f",
            "donutError": "#d08002",
            "donutPending": "#bf8700",
            "donutSuccess": "#0088ff",
            "donutNeutral": "#afb8c1",
            "dropdownText": "#afb8c1",
            "dropdownBg": "#32383f",
            "dropdownBorder": "#424a53",
            "dropdownShadow": "rgba(27,31,36,0.3)",
            "dropdownHoverText": "#f6f8fa",
            "dropdownHoverBg": "#424a53",
            "dropdownBtnHoverText": "#f6f8fa",
            "dropdownBtnHoverBg": "#32383f",
            "scrollbarThumbBg": "#57606a",
            "headerLabelText": "#d0d7de",
            "headerLabelOpenText": "#f6f8fa",
            "headerBorder": "#32383f",
            "headerIcon": "#8c959f",
            "lineText": "#d0d7de",
            "lineNumText": "rgba(140,149,159,0.75)",
            "lineTimestampText": "#8c959f",
            "lineHoverBg": "#32383f",
            "lineSelectedBg": "rgba(33,139,255,0.15)",
            "lineSelectedNumText": "#54aeff",
            "lineDtFmText": "#24292f",
            "lineDtFmBg": "#9a6700",
            "gateBg": "rgba(125,78,0,0.15)",
            "gateText": "#d0d7de",
            "gateWaitingText": "#afb8c1",
            "stepHeaderOpenBg": "#32383f",
            "stepErrorText": "#e7a100",
            "stepWarningText": "#d4a72c",
            "loglineText": "#8c959f",
            "loglineNumText": "rgba(140,149,159,0.75)",
            "loglineDebugText": "#c297ff",
            "loglineErrorText": "#d0d7de",
            "loglineErrorNumText": "#e7a100",
            "loglineErrorBg": "rgba(139,70,0,0.15)",
            "loglineWarningText": "#d0d7de",
            "loglineWarningNumText": "#d4a72c",
            "loglineWarningBg": "rgba(125,78,0,0.15)",
            "loglineCommandText": "#54aeff",
            "loglineSectionText": "#35adff",
            "ansi": {
              "black": "#24292f",
              "blackBright": "#32383f",
              "white": "#d0d7de",
              "whiteBright": "#d0d7de",
              "gray": "#8c959f",
              "red": "#e7a100",
              "redBright": "#f8c200",
              "green": "#35adff",
              "greenBright": "#65ccff",
              "yellow": "#d4a72c",
              "yellowBright": "#eac54f",
              "blue": "#54aeff",
              "blueBright": "#80ccff",
              "magenta": "#c297ff",
              "magentaBright": "#d8b9ff",
              "cyan": "#76e3ea",
              "cyanBright": "#b3f0ff"
            }
          },
          "mktg": {
            "success": "rgba(3,119,234,1)",
            "info": "rgba(19,119,234,1)",
            "bgShadeGradient": {
              "top": "rgba(27,31,36,0.065)",
              "bottom": "rgba(27,31,36,0)"
            },
            "btn": {
              "bg": {
                "top": "hsla(228,82%,66%,1)",
                "bottom": "#4969ed"
              },
              "bgOverlay": {
                "top": "hsla(228,74%,59%,1)",
                "bottom": "#3355e0"
              },
              "text": "#ffffff",
              "primary": {
                "bg": {
                  "top": "hsla(137,56%,46%,1)",
                  "bottom": "#2ea44f"
                },
                "bgOverlay": {
                  "top": "hsla(134,60%,38%,1)",
                  "bottom": "#22863a"
                },
                "text": "#ffffff"
              },
              "enterprise": {
                "bg": {
                  "top": "hsla(249,100%,72%,1)",
                  "bottom": "#6f57ff"
                },
                "bgOverlay": {
                  "top": "hsla(248,65%,63%,1)",
                  "bottom": "#614eda"
                },
                "text": "#ffffff"
              },
              "outline": {
                "text": "#4969ed",
                "border": "rgba(73,105,237,0.3)",
                "hover": {
                  "text": "#3355e0",
                  "border": "rgba(51,85,224,0.5)"
                },
                "focus": {
                  "border": "#4969ed",
                  "borderInset": "rgba(73,105,237,0.5)"
                }
              },
              "dark": {
                "text": "#ffffff",
                "border": "rgba(255,255,255,0.3)",
                "hover": {
                  "text": "#ffffff",
                  "border": "rgba(255,255,255,0.5)"
                },
                "focus": {
                  "border": "#ffffff",
                  "borderInset": "rgba(255,255,255,0.5)"
                }
              }
            }
          },
          "avatar": {
            "bg": "#ffffff",
            "border": "rgba(27,31,36,0.15)",
            "stackFade": "#afb8c1",
            "stackFadeMore": "#d0d7de"
          },
          "header": {
            "text": "rgba(255,255,255,0.7)",
            "bg": "#24292f",
            "logo": "#ffffff"
          },
          "headerSearch": {
            "bg": "#24292f",
            "border": "#57606a"
          },
          "ansi": {
            "black": "#24292f",
            "blackBright": "#57606a",
            "white": "#6e7781",
            "whiteBright": "#8c959f",
            "gray": "#6e7781",
            "red": "#ac5e00",
            "redBright": "#8b4600",
            "green": "#054da9",
            "greenBright": "#0566d5",
            "yellow": "#4d2d00",
            "yellowBright": "#633c01",
            "blue": "#0969da",
            "blueBright": "#218bff",
            "magenta": "#8250df",
            "magentaBright": "#a475f9",
            "cyan": "#1b7c83",
            "cyanBright": "#3192aa"
          },
          "btn": {
            "text": "#24292f",
            "bg": "#f6f8fa",
            "border": "rgba(27,31,36,0.15)",
            "hoverBg": "#f3f4f6",
            "hoverBorder": "rgba(27,31,36,0.15)",
            "activeBg": "hsla(220,14%,93%,1)",
            "activeBorder": "rgba(27,31,36,0.15)",
            "selectedBg": "hsla(220,14%,94%,1)",
            "focusBg": "#f6f8fa",
            "focusBorder": "rgba(27,31,36,0.15)",
            "counterBg": "rgba(27,31,36,0.08)",
            "primary": {
              "text": "#ffffff",
              "bg": "#0088ff",
              "border": "rgba(27,31,36,0.15)",
              "hoverBg": "#0566d5",
              "hoverBorder": "rgba(27,31,36,0.15)",
              "selectedBg": "hsla(212,95%,41%,1)",
              "disabledText": "rgba(255,255,255,0.8)",
              "disabledBg": "#65ccff",
              "disabledBorder": "rgba(27,31,36,0.15)",
              "focusBg": "#0088ff",
              "focusBorder": "rgba(27,31,36,0.15)",
              "icon": "rgba(255,255,255,0.8)",
              "counterBg": "rgba(255,255,255,0.2)"
            },
            "outline": {
              "text": "#0969da",
              "hoverText": "#ffffff",
              "hoverBg": "#0969da",
              "hoverBorder": "rgba(27,31,36,0.15)",
              "hoverCounterBg": "rgba(255,255,255,0.2)",
              "selectedText": "#ffffff",
              "selectedBg": "hsla(212,92%,42%,1)",
              "selectedBorder": "rgba(27,31,36,0.15)",
              "disabledText": "rgba(9,105,218,0.5)",
              "disabledBg": "#f6f8fa",
              "disabledCounterBg": "rgba(9,105,218,0.05)",
              "focusBorder": "rgba(27,31,36,0.15)",
              "counterBg": "rgba(9,105,218,0.1)"
            },
            "danger": {
              "text": "#ac5e00",
              "hoverText": "#ffffff",
              "hoverBg": "#8b4600",
              "hoverBorder": "rgba(27,31,36,0.15)",
              "hoverCounterBg": "rgba(255,255,255,0.2)",
              "selectedText": "#ffffff",
              "selectedBg": "hsla(33,100%,31%,1)",
              "selectedBorder": "rgba(27,31,36,0.15)",
              "disabledText": "rgba(172,94,0,0.5)",
              "disabledBg": "#f6f8fa",
              "disabledCounterBg": "rgba(172,94,0,0.05)",
              "focusBorder": "rgba(27,31,36,0.15)",
              "counterBg": "rgba(172,94,0,0.1)",
              "icon": "#ac5e00",
              "hoverIcon": "#ffffff"
            }
          },
          "fg": {
            "default": "#24292f",
            "muted": "#57606a",
            "subtle": "#6e7781",
            "onEmphasis": "#ffffff"
          },
          "canvas": {
            "default": "#ffffff",
            "overlay": "#ffffff",
            "inset": "#f6f8fa",
            "subtle": "#f6f8fa"
          },
          "neutral": {
            "emphasisPlus": "#24292f",
            "emphasis": "#6e7781",
            "muted": "rgba(175,184,193,0.2)",
            "subtle": "rgba(234,238,242,0.5)"
          },
          "accent": {
            "fg": "#0969da",
            "emphasis": "#0969da",
            "muted": "rgba(84,174,255,0.4)",
            "subtle": "#ddf4ff"
          },
          "success": {
            "fg": "#0566d5",
            "emphasis": "#0088ff",
            "muted": "rgba(53,173,255,0.4)",
            "subtle": "#c0f6ff"
          },
          "attention": {
            "fg": "#9a6700",
            "emphasis": "#bf8700",
            "muted": "rgba(212,167,44,0.4)",
            "subtle": "#fff8c5"
          },
          "severe": {
            "fg": "#bc4c00",
            "emphasis": "#bc4c00",
            "muted": "rgba(251,143,68,0.4)",
            "subtle": "#fff1e5"
          },
          "danger": {
            "fg": "#ac5e00",
            "emphasis": "#ac5e00",
            "muted": "rgba(231,161,0,0.4)",
            "subtle": "#fefe48"
          },
          "done": {
            "fg": "#8250df",
            "emphasis": "#8250df",
            "muted": "rgba(194,151,255,0.4)",
            "subtle": "#fbefff"
          },
          "sponsors": {
            "fg": "#bf3989",
            "emphasis": "#bf3989",
            "muted": "rgba(255,128,200,0.4)",
            "subtle": "#ffeff7"
          },
          "primer": {
            "canvas": {
              "backdrop": "rgba(27,31,36,0.5)",
              "sticky": "rgba(255,255,255,0.95)"
            },
            "border": {
              "active": "#FD8C73",
              "contrast": "rgba(27,31,36,0.1)"
            }
          }
        },
        "shadows": {
          "shadow": {
            "highlight": "inset 0 1px 0 rgba(255,255,255,0.25)",
            "inset": "inset 0 1px 0 rgba(208,215,222,0.2)",
            "small": "0 1px 0 rgba(27,31,36,0.04)",
            "medium": "0 3px 6px rgba(140,149,159,0.15)",
            "large": "0 8px 24px rgba(140,149,159,0.2)",
            "extraLarge": "0 12px 28px rgba(140,149,159,0.3)"
          },
          "state": {
            "focus": {
              "shadow": "0 0 0 3px rgba(9,105,218,0.3)"
            }
          },
          "autocomplete": {
            "shadow": "0 3px 6px rgba(140,149,159,0.15)"
          },
          "dropdown": {
            "shadow": "0 8px 24px rgba(140,149,159,0.2)"
          },
          "input": {
            "shadow": "inset 0 1px 0 rgba(208,215,222,0.2)"
          },
          "toast": {
            "shadow": "0 8px 24px rgba(140,149,159,0.2)"
          },
          "selectMenu": {
            "shadow": "0 8px 24px rgba(140,149,159,0.2)"
          },
          "avatar": {
            "childShadow": "-2px -2px 0 rgba(255,255,255,0.8)"
          },
          "overlay": {
            "shadow": "0 1px 3px rgba(27,31,36,0.12), 0 8px 24px rgba(66,74,83,0.12)"
          },
          "btn": {
            "shadow": "0 1px 0 rgba(27,31,36,0.04)",
            "insetShadow": "inset 0 1px 0 rgba(255,255,255,0.25)",
            "focusShadow": "0 0 0 3px rgba(9,105,218,0.3)",
            "shadowActive": "inset 0 0.15em 0.3em rgba(27,31,36,0.15)",
            "shadowInputFocus": "0 0 0 0.2em rgba(9,105,218,0.3)",
            "primary": {
              "shadow": "0 1px 0 rgba(27,31,36,0.1)",
              "insetShadow": "inset 0 1px 0 rgba(255,255,255,0.03)",
              "selectedShadow": "inset 0 1px 0 rgba(0,31,80,0.2)",
              "focusShadow": "0 0 0 3px rgba(0,136,255,0.4)"
            },
            "outline": {
              "hoverShadow": "0 1px 0 rgba(27,31,36,0.1)",
              "hoverInsetShadow": "inset 0 1px 0 rgba(255,255,255,0.03)",
              "selectedShadow": "inset 0 1px 0 rgba(0,33,85,0.2)",
              "focusShadow": "0 0 0 3px rgba(5,80,174,0.4)"
            },
            "danger": {
              "hoverShadow": "0 1px 0 rgba(27,31,36,0.1)",
              "hoverInsetShadow": "inset 0 1px 0 rgba(255,255,255,0.03)",
              "selectedShadow": "inset 0 1px 0 rgba(47,41,0,0.2)",
              "focusShadow": "0 0 0 3px rgba(139,70,0,0.4)"
            }
          },
          "primer": {
            "shadow": {
              "highlight": "inset 0 1px 0 rgba(255,255,255,0.25)",
              "inset": "inset 0 1px 0 rgba(208,215,222,0.2)",
              "focus": "0 0 0 3px rgba(9,105,218,0.3)"
            }
          }
        }
      },
      "dark": {
        "colors": {
          "auto": {
            "black": "#f0f6fc",
            "white": "#010409",
            "gray": ["#0d1117", "#161b22", "#21262d", "#30363d", "#484f58", "#6e7681", "#8b949e", "#b1bac4", "#c9d1d9", "#f0f6fc"],
            "blue": ["#051d4d", "#0c2d6b", "#0d419d", "#1158c7", "#1f6feb", "#388bfd", "#58a6ff", "#79c0ff", "#a5d6ff", "#cae8ff"],
            "green": ["#04260f", "#033a16", "#0f5323", "#196c2e", "#238636", "#2ea043", "#3fb950", "#56d364", "#7ee787", "#aff5b4"],
            "yellow": ["#341a00", "#4b2900", "#693e00", "#845306", "#9e6a03", "#bb8009", "#d29922", "#e3b341", "#f2cc60", "#f8e3a1"],
            "orange": ["#3d1300", "#5a1e02", "#762d0a", "#9b4215", "#bd561d", "#db6d28", "#f0883e", "#ffa657", "#ffc680", "#ffdfb6"],
            "red": ["#490202", "#67060c", "#8e1519", "#b62324", "#da3633", "#f85149", "#ff7b72", "#ffa198", "#ffc1ba", "#ffdcd7"],
            "purple": ["#271052", "#3c1e70", "#553098", "#6e40c9", "#8957e5", "#a371f7", "#bc8cff", "#d2a8ff", "#e2c5ff", "#eddeff"],
            "pink": ["#42062a", "#5e103e", "#7d2457", "#9e3670", "#bf4b8a", "#db61a2", "#f778ba", "#ff9bce", "#ffbedd", "#ffdaec"]
          },
          "text": {
            "primary": "#c9d1d9",
            "secondary": "#8b949e",
            "tertiary": "#8b949e",
            "placeholder": "#484f58",
            "disabled": "#8b949e",
            "inverse": "#f0f6fc",
            "link": "#58a6ff",
            "danger": "#f85149",
            "success": "#3fb950",
            "warning": "#d29922",
            "white": "#f0f6fc"
          },
          "icon": {
            "primary": "#c9d1d9",
            "secondary": "#8b949e",
            "tertiary": "#8b949e",
            "info": "#58a6ff",
            "danger": "#f85149",
            "success": "#3fb950",
            "warning": "#d29922"
          },
          "border": {
            "primary": "#30363d",
            "secondary": "#21262d",
            "tertiary": "#30363d",
            "overlay": "#30363d",
            "inverse": "#f0f6fc",
            "info": "#1f6feb",
            "danger": "#da3633",
            "success": "#238636",
            "warning": "#9e6a03",
            "default": "#30363d",
            "muted": "#21262d",
            "subtle": "rgba(240,246,252,0.1)"
          },
          "bg": {
            "canvas": "#0d1117",
            "canvasMobile": "rgba(0,0,0,0)",
            "canvasInverse": "#6e7681",
            "canvasInset": "#010409",
            "primary": "#0d1117",
            "secondary": "#161b22",
            "tertiary": "#161b22",
            "overlay": "#161b22",
            "backdrop": "rgba(1,4,9,0.8)",
            "info": "rgba(56,139,253,0.15)",
            "infoInverse": "#1f6feb",
            "danger": "rgba(248,81,73,0.15)",
            "dangerInverse": "#da3633",
            "success": "rgba(46,160,67,0.15)",
            "successInverse": "#238636",
            "warning": "rgba(187,128,9,0.15)",
            "warningInverse": "#9e6a03"
          },
          "state": {
            "hover": {
              "primaryBg": "#1f6feb",
              "primaryBorder": "#1f6feb",
              "primaryText": "#f0f6fc",
              "primaryIcon": "#f0f6fc",
              "secondaryBg": "rgba(110,118,129,0.1)",
              "secondaryBorder": "rgba(110,118,129,0.1)"
            },
            "selected": {
              "primaryBg": "#1f6feb",
              "primaryBorder": "#1f6feb",
              "primaryText": "#f0f6fc",
              "primaryIcon": "#f0f6fc"
            },
            "focus": {
              "border": "#1f6feb"
            }
          },
          "fade": {
            "fg10": "rgba(240,246,252,0.1)",
            "fg15": "rgba(240,246,252,0.15)",
            "fg30": "rgba(240,246,252,0.3)",
            "fg50": "rgba(240,246,252,0.5)",
            "fg70": "rgba(240,246,252,0.7)",
            "fg85": "rgba(240,246,252,0.85)",
            "black10": "rgba(1,4,9,0.1)",
            "black15": "rgba(1,4,9,0.15)",
            "black30": "rgba(1,4,9,0.3)",
            "black50": "rgba(1,4,9,0.5)",
            "black70": "rgba(1,4,9,0.7)",
            "black85": "rgba(1,4,9,0.85)",
            "white10": "rgba(240,246,252,0.1)",
            "white15": "rgba(240,246,252,0.15)",
            "white30": "rgba(240,246,252,0.3)",
            "white50": "rgba(240,246,252,0.5)",
            "white70": "rgba(240,246,252,0.7)",
            "white85": "rgba(240,246,252,0.85)"
          },
          "alert": {
            "info": {
              "text": "#c9d1d9",
              "icon": "#58a6ff",
              "bg": "rgba(56,139,253,0.15)",
              "border": "rgba(56,139,253,0.4)"
            },
            "warn": {
              "text": "#c9d1d9",
              "icon": "#d29922",
              "bg": "rgba(187,128,9,0.15)",
              "border": "rgba(187,128,9,0.4)"
            },
            "error": {
              "text": "#c9d1d9",
              "icon": "#f85149",
              "bg": "rgba(248,81,73,0.15)",
              "border": "rgba(248,81,73,0.4)"
            },
            "success": {
              "text": "#c9d1d9",
              "icon": "#3fb950",
              "bg": "rgba(46,160,67,0.15)",
              "border": "rgba(46,160,67,0.4)"
            }
          },
          "autocomplete": {
            "rowBorder": "#21262d"
          },
          "blankslate": {
            "icon": "#8b949e"
          },
          "counter": {
            "text": "#c9d1d9",
            "bg": "rgba(110,118,129,0.4)",
            "primary": {
              "text": "#f0f6fc",
              "bg": "#6e7681"
            },
            "secondary": {
              "text": "#8b949e",
              "bg": "rgba(110,118,129,0.1)"
            }
          },
          "box": {
            "blueBorder": "rgba(56,139,253,0.4)",
            "rowYellowBg": "rgba(187,128,9,0.15)",
            "rowBlueBg": "rgba(56,139,253,0.15)",
            "headerBlueBg": "rgba(56,139,253,0.15)",
            "headerBlueBorder": "rgba(56,139,253,0.4)",
            "borderInfo": "rgba(56,139,253,0.4)",
            "bgInfo": "rgba(56,139,253,0.15)",
            "borderWarning": "rgba(187,128,9,0.4)",
            "bgWarning": "rgba(187,128,9,0.15)"
          },
          "branchName": {
            "text": "#8b949e",
            "icon": "#8b949e",
            "bg": "rgba(56,139,253,0.15)",
            "link": {
              "text": "#58a6ff",
              "icon": "#58a6ff",
              "bg": "rgba(56,139,253,0.15)"
            }
          },
          "markdown": {
            "codeBg": "rgba(110,118,129,0.4)",
            "frameBorder": "#30363d",
            "blockquoteBorder": "#30363d",
            "tableBorder": "#30363d",
            "tableTrBorder": "#21262d"
          },
          "filterItem": {
            "barBg": "rgba(110,118,129,0.1)"
          },
          "hiddenTextExpander": {
            "bg": "rgba(110,118,129,0.4)",
            "bgHover": "rgba(56,139,253,0.4)"
          },
          "dragAndDrop": {
            "border": "#30363d"
          },
          "uploadEnabled": {
            "border": "#30363d",
            "borderFocused": "#1f6feb"
          },
          "previewableCommentForm": {
            "border": "#30363d"
          },
          "verifiedBadge": {
            "text": "#3fb950",
            "bg": "#0d1117",
            "border": "#30363d"
          },
          "socialCount": {
            "bg": "#0d1117"
          },
          "tooltip": {
            "text": "#f0f6fc",
            "bg": "#6e7681"
          },
          "filesExplorerIcon": "#58a6ff",
          "hlAuthorBg": "rgba(56,139,253,0.15)",
          "hlAuthorBorder": "rgba(56,139,253,0.4)",
          "logoSubdued": "rgba(110,118,129,0.4)",
          "discussionBorder": "rgba(46,160,67,0.4)",
          "discussionBgSuccess": "#238636",
          "actionsWorkflowTableStickyBg": "rgba(13,17,23,0.95)",
          "repoLanguageColorBorder": "rgba(240,246,252,0.2)",
          "codeSelectionBg": "rgba(56,139,253,0.4)",
          "highlight": {
            "text": "#c9d1d9",
            "bg": "rgba(187,128,9,0.15)"
          },
          "blob": {
            "lineHighlightBg": "rgba(187,128,9,0.15)",
            "lineHighlightBorder": "rgba(187,128,9,0.4)"
          },
          "topicTag": {
            "text": "#58a6ff",
            "bg": "rgba(56,139,253,0.15)",
            "hoverBg": "#1f6feb",
            "activeBg": "rgba(56,139,253,0.15)",
            "border": "rgba(0,0,0,0)"
          },
          "footerInvertocat": {
            "octicon": "#484f58",
            "octiconHover": "#8b949e"
          },
          "label": {
            "border": "#30363d",
            "primary": {
              "text": "#c9d1d9",
              "border": "#6e7681"
            },
            "secondary": {
              "text": "#8b949e",
              "border": "#30363d"
            },
            "info": {
              "text": "#58a6ff",
              "border": "#1f6feb"
            },
            "success": {
              "text": "#3fb950",
              "border": "#238636"
            },
            "warning": {
              "text": "#d29922",
              "border": "#9e6a03"
            },
            "danger": {
              "text": "#f85149",
              "border": "#da3633"
            },
            "orange": {
              "text": "#db6d28",
              "border": "#bd561d"
            }
          },
          "input": {
            "bg": "#0d1117",
            "contrastBg": "#010409",
            "border": "#30363d",
            "disabledBorder": "#30363d",
            "warningBorder": "#9e6a03",
            "errorBorder": "#da3633",
            "tooltip": {
              "success": {
                "text": "#c9d1d9",
                "bg": "rgba(46,160,67,0.15)",
                "border": "rgba(46,160,67,0.4)"
              },
              "warning": {
                "text": "#c9d1d9",
                "bg": "rgba(187,128,9,0.15)",
                "border": "rgba(187,128,9,0.4)"
              },
              "error": {
                "text": "#c9d1d9",
                "bg": "rgba(248,81,73,0.15)",
                "border": "rgba(248,81,73,0.4)"
              }
            },
            "disabledBg": "rgba(110,118,129,0)"
          },
          "toast": {
            "text": "#c9d1d9",
            "bg": "#0d1117",
            "border": "#30363d",
            "icon": "#f0f6fc",
            "iconBg": "#1f6feb",
            "iconBorder": "rgba(0,0,0,0)",
            "success": {
              "text": "#c9d1d9",
              "border": "#30363d",
              "icon": "#f0f6fc",
              "iconBg": "#238636",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "warning": {
              "text": "#c9d1d9",
              "border": "#30363d",
              "icon": "#c9d1d9",
              "iconBg": "#9e6a03",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "danger": {
              "text": "#c9d1d9",
              "border": "#30363d",
              "icon": "#f0f6fc",
              "iconBg": "#da3633",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "loading": {
              "text": "#c9d1d9",
              "border": "#30363d",
              "icon": "#f0f6fc",
              "iconBg": "#6e7681",
              "iconBorder": "rgba(0,0,0,0)"
            }
          },
          "timeline": {
            "text": "#8b949e",
            "badgeSuccessBorder": "rgba(0,0,0,0)",
            "targetBadgeBorder": "#1f6feb",
            "targetBadgeShadow": "rgba(56,139,253,0.4)",
            "badgeBg": "#21262d"
          },
          "diffstat": {
            "neutralBg": "rgba(110,118,129,0.4)",
            "neutralBorder": "rgba(240,246,252,0.1)",
            "deletionBorder": "rgba(240,246,252,0.1)",
            "additionBorder": "rgba(240,246,252,0.1)",
            "deletionBg": "#da3633",
            "additionBg": "#3fb950"
          },
          "diff": {
            "addition": {
              "text": "#c9d1d9",
              "bg": "rgba(46,160,67,0.15)",
              "border": "rgba(46,160,67,0.4)"
            },
            "deletion": {
              "text": "#c9d1d9",
              "bg": "rgba(248,81,73,0.15)",
              "border": "rgba(248,81,73,0.4)"
            },
            "change": {
              "text": "#d29922",
              "bg": "rgba(187,128,9,0.15)",
              "border": "rgba(187,128,9,0.4)"
            }
          },
          "mergeBox": {
            "successIconBg": "#238636",
            "successIconText": "#f0f6fc",
            "successIconBorder": "rgba(0,0,0,0)",
            "successIndicatorBg": "#238636",
            "successIndicatorBorder": "rgba(0,0,0,0)",
            "mergedIconBg": "#8957e5",
            "mergedIconText": "#f0f6fc",
            "mergedIconBorder": "rgba(0,0,0,0)",
            "mergedBoxBorder": "#8957e5",
            "neutralIconBg": "#6e7681",
            "neutralIconText": "#f0f6fc",
            "neutralIconBorder": "rgba(0,0,0,0)",
            "neutralIndicatorBg": "#6e7681",
            "neutralIndicatorBorder": "rgba(0,0,0,0)",
            "warningIconBg": "#9e6a03",
            "warningIconText": "#f0f6fc",
            "warningIconBorder": "rgba(0,0,0,0)",
            "warningBoxBorder": "#9e6a03",
            "warningMergeHighlight": "rgba(0,0,0,0)",
            "errorIconBg": "#da3633",
            "errorIconText": "#f0f6fc",
            "errorIconBorder": "rgba(0,0,0,0)",
            "errorIndicatorBg": "#da3633",
            "errorIndicatorBorder": "rgba(0,0,0,0)"
          },
          "underlinenav": {
            "border": "rgba(0,0,0,0)",
            "borderHover": "rgba(110,118,129,0.4)",
            "borderActive": "#F78166",
            "text": "#c9d1d9",
            "textHover": "#c9d1d9",
            "textActive": "#c9d1d9",
            "icon": "#484f58",
            "iconHover": "#484f58",
            "iconActive": "#c9d1d9",
            "counterText": "#c9d1d9",
            "counterBg": "rgba(110,118,129,0.4)"
          },
          "selectMenu": {
            "borderSecondary": "#21262d",
            "backdropBg": "rgba(1,4,9,0.8)",
            "backdropBorder": "#484f58",
            "tapHighlight": "rgba(48,54,61,0.5)",
            "tapFocusBg": "#0c2d6b"
          },
          "sidenav": {
            "borderActive": "#F78166",
            "selectedBg": "#21262d"
          },
          "menu": {
            "headingText": "#c9d1d9",
            "borderActive": "#F78166",
            "bgActive": "#161b22"
          },
          "project": {
            "cardBg": "#161b22",
            "headerBg": "#0d1117",
            "sidebarBg": "#161b22",
            "gradientIn": "#161b22",
            "gradientOut": "rgba(22,27,34,0)"
          },
          "prState": {
            "draft": {
              "text": "#f0f6fc",
              "bg": "#6e7681",
              "border": "rgba(0,0,0,0)"
            },
            "open": {
              "text": "#f0f6fc",
              "bg": "#238636",
              "border": "rgba(0,0,0,0)"
            },
            "merged": {
              "text": "#f0f6fc",
              "bg": "#8957e5",
              "border": "rgba(0,0,0,0)"
            },
            "closed": {
              "text": "#f0f6fc",
              "bg": "#da3633",
              "border": "rgba(0,0,0,0)"
            }
          },
          "diffBlob": {
            "numText": "#484f58",
            "numHoverText": "#c9d1d9",
            "addition": {
              "numHoverText": "#c9d1d9",
              "numText": "#c9d1d9",
              "fg": "#c9d1d9",
              "numBg": "rgba(63,185,80,0.3)",
              "lineBg": "rgba(46,160,67,0.15)",
              "wordBg": "rgba(46,160,67,0.4)"
            },
            "deletion": {
              "numHoverText": "#c9d1d9",
              "numText": "#c9d1d9",
              "fg": "#c9d1d9",
              "numBg": "rgba(248,81,73,0.3)",
              "lineBg": "rgba(248,81,73,0.15)",
              "wordBg": "rgba(248,81,73,0.4)"
            },
            "hunk": {
              "text": "#8b949e",
              "numBg": "rgba(56,139,253,0.4)",
              "lineBg": "rgba(56,139,253,0.15)"
            },
            "emptyBlockBg": "rgba(110,118,129,0.1)",
            "selectedLineHighlightBg": "rgba(187,128,9,0.15)",
            "selectedLineHighlightBorder": "rgba(187,128,9,0.4)",
            "expander": {
              "hoverIcon": "#f0f6fc",
              "hoverBg": "#1f6feb",
              "icon": "#8b949e"
            },
            "commentButton": {
              "icon": "#f0f6fc",
              "bg": "#1f6feb",
              "gradientBg": "rgba(0,0,0,0)"
            }
          },
          "globalNav": {
            "logo": "#f0f6fc",
            "bg": "#161b22",
            "text": "#c9d1d9",
            "icon": "#c9d1d9",
            "inputBg": "#0d1117",
            "inputBorder": "#21262d",
            "inputIcon": "#21262d",
            "inputPlaceholder": "#484f58"
          },
          "introShelf": {
            "gradientLeft": "rgba(56,139,253,0.15)",
            "gradientRight": "rgba(46,160,67,0.15)",
            "gradientIn": "#0d1117",
            "gradientOut": "rgba(240,246,252,0)"
          },
          "canvasDefaultTransparent": "rgba(13,17,23,0)",
          "marketingIcon": {
            "primary": "#79c0ff",
            "secondary": "#1f6feb"
          },
          "searchKeyword": {
            "hl": "rgba(210,153,34,0.4)"
          },
          "prettylights": {
            "syntax": {
              "comment": "#8b949e",
              "constant": "#79c0ff",
              "entity": "#d2a8ff",
              "storageModifierImport": "#c9d1d9",
              "entityTag": "#7ee787",
              "keyword": "#ff7b72",
              "string": "#a5d6ff",
              "variable": "#ffa657",
              "brackethighlighterUnmatched": "#f85149",
              "invalidIllegalText": "#f0f6fc",
              "invalidIllegalBg": "#8e1519",
              "carriageReturnText": "#f0f6fc",
              "carriageReturnBg": "#b62324",
              "stringRegexp": "#7ee787",
              "markupList": "#f2cc60",
              "markupHeading": "#1f6feb",
              "markupItalic": "#c9d1d9",
              "markupBold": "#c9d1d9",
              "markupDeletedText": "#ffdcd7",
              "markupDeletedBg": "#67060c",
              "markupInsertedText": "#aff5b4",
              "markupInsertedBg": "#033a16",
              "markupChangedText": "#ffdfb6",
              "markupChangedBg": "#5a1e02",
              "markupIgnoredText": "#c9d1d9",
              "markupIgnoredBg": "#1158c7",
              "metaDiffRange": "#d2a8ff",
              "brackethighlighterAngle": "#8b949e",
              "sublimelinterGutterMark": "#484f58",
              "constantOtherReferenceLink": "#a5d6ff"
            }
          },
          "codemirror": {
            "text": "#c9d1d9",
            "bg": "#0d1117",
            "guttersBg": "#0d1117",
            "guttermarkerText": "#0d1117",
            "guttermarkerSubtleText": "#484f58",
            "linenumberText": "#8b949e",
            "cursor": "#c9d1d9",
            "selectionBg": "rgba(56,139,253,0.4)",
            "activelineBg": "rgba(110,118,129,0.1)",
            "matchingbracketText": "#c9d1d9",
            "linesBg": "#0d1117",
            "syntax": {
              "comment": "#8b949e",
              "constant": "#79c0ff",
              "entity": "#d2a8ff",
              "keyword": "#ff7b72",
              "storage": "#ff7b72",
              "string": "#a5d6ff",
              "support": "#79c0ff",
              "variable": "#ffa657"
            }
          },
          "checks": {
            "bg": "#010409",
            "textPrimary": "#c9d1d9",
            "textSecondary": "#8b949e",
            "textLink": "#58a6ff",
            "btnIcon": "#8b949e",
            "btnHoverIcon": "#c9d1d9",
            "btnHoverBg": "rgba(110,118,129,0.1)",
            "inputText": "#8b949e",
            "inputPlaceholderText": "#484f58",
            "inputFocusText": "#c9d1d9",
            "inputBg": "#161b22",
            "donutError": "#f85149",
            "donutPending": "#d29922",
            "donutSuccess": "#2ea043",
            "donutNeutral": "#8b949e",
            "dropdownText": "#c9d1d9",
            "dropdownBg": "#161b22",
            "dropdownBorder": "#30363d",
            "dropdownShadow": "rgba(1,4,9,0.3)",
            "dropdownHoverText": "#c9d1d9",
            "dropdownHoverBg": "rgba(110,118,129,0.1)",
            "dropdownBtnHoverText": "#c9d1d9",
            "dropdownBtnHoverBg": "rgba(110,118,129,0.1)",
            "scrollbarThumbBg": "rgba(110,118,129,0.4)",
            "headerLabelText": "#8b949e",
            "headerLabelOpenText": "#c9d1d9",
            "headerBorder": "#21262d",
            "headerIcon": "#8b949e",
            "lineText": "#8b949e",
            "lineNumText": "#484f58",
            "lineTimestampText": "#484f58",
            "lineHoverBg": "rgba(110,118,129,0.1)",
            "lineSelectedBg": "rgba(56,139,253,0.15)",
            "lineSelectedNumText": "#58a6ff",
            "lineDtFmText": "#f0f6fc",
            "lineDtFmBg": "#9e6a03",
            "gateBg": "rgba(187,128,9,0.15)",
            "gateText": "#8b949e",
            "gateWaitingText": "#d29922",
            "stepHeaderOpenBg": "#161b22",
            "stepErrorText": "#f85149",
            "stepWarningText": "#d29922",
            "loglineText": "#8b949e",
            "loglineNumText": "#484f58",
            "loglineDebugText": "#a371f7",
            "loglineErrorText": "#8b949e",
            "loglineErrorNumText": "#484f58",
            "loglineErrorBg": "rgba(248,81,73,0.15)",
            "loglineWarningText": "#8b949e",
            "loglineWarningNumText": "#d29922",
            "loglineWarningBg": "rgba(187,128,9,0.15)",
            "loglineCommandText": "#58a6ff",
            "loglineSectionText": "#3fb950",
            "ansi": {
              "black": "#0d1117",
              "blackBright": "#161b22",
              "white": "#b1bac4",
              "whiteBright": "#b1bac4",
              "gray": "#6e7681",
              "red": "#ff7b72",
              "redBright": "#ffa198",
              "green": "#3fb950",
              "greenBright": "#56d364",
              "yellow": "#d29922",
              "yellowBright": "#e3b341",
              "blue": "#58a6ff",
              "blueBright": "#79c0ff",
              "magenta": "#bc8cff",
              "magentaBright": "#d2a8ff",
              "cyan": "#76e3ea",
              "cyanBright": "#b3f0ff"
            }
          },
          "mktg": {
            "success": "rgba(41,147,61,1)",
            "info": "rgba(42,123,243,1)",
            "bgShadeGradient": {
              "top": "rgba(1,4,9,0.065)",
              "bottom": "rgba(1,4,9,0)"
            },
            "btn": {
              "bg": {
                "top": "hsla(228,82%,66%,1)",
                "bottom": "#4969ed"
              },
              "bgOverlay": {
                "top": "hsla(228,74%,59%,1)",
                "bottom": "#3355e0"
              },
              "text": "#f0f6fc",
              "primary": {
                "bg": {
                  "top": "hsla(137,56%,46%,1)",
                  "bottom": "#2ea44f"
                },
                "bgOverlay": {
                  "top": "hsla(134,60%,38%,1)",
                  "bottom": "#22863a"
                },
                "text": "#f0f6fc"
              },
              "enterprise": {
                "bg": {
                  "top": "hsla(249,100%,72%,1)",
                  "bottom": "#6f57ff"
                },
                "bgOverlay": {
                  "top": "hsla(248,65%,63%,1)",
                  "bottom": "#614eda"
                },
                "text": "#f0f6fc"
              },
              "outline": {
                "text": "#f0f6fc",
                "border": "rgba(240,246,252,0.3)",
                "hover": {
                  "text": "#f0f6fc",
                  "border": "rgba(240,246,252,0.5)"
                },
                "focus": {
                  "border": "#f0f6fc",
                  "borderInset": "rgba(240,246,252,0.5)"
                }
              },
              "dark": {
                "text": "#f0f6fc",
                "border": "rgba(240,246,252,0.3)",
                "hover": {
                  "text": "#f0f6fc",
                  "border": "rgba(240,246,252,0.5)"
                },
                "focus": {
                  "border": "#f0f6fc",
                  "borderInset": "rgba(240,246,252,0.5)"
                }
              }
            }
          },
          "avatar": {
            "bg": "rgba(240,246,252,0.1)",
            "border": "rgba(240,246,252,0.1)",
            "stackFade": "#30363d",
            "stackFadeMore": "#21262d"
          },
          "header": {
            "text": "rgba(240,246,252,0.7)",
            "bg": "#161b22",
            "logo": "#f0f6fc"
          },
          "headerSearch": {
            "bg": "#0d1117",
            "border": "#30363d"
          },
          "ansi": {
            "black": "#484f58",
            "blackBright": "#6e7681",
            "white": "#b1bac4",
            "whiteBright": "#f0f6fc",
            "gray": "#6e7681",
            "red": "#ff7b72",
            "redBright": "#ffa198",
            "green": "#3fb950",
            "greenBright": "#56d364",
            "yellow": "#d29922",
            "yellowBright": "#e3b341",
            "blue": "#58a6ff",
            "blueBright": "#79c0ff",
            "magenta": "#bc8cff",
            "magentaBright": "#d2a8ff",
            "cyan": "#39c5cf",
            "cyanBright": "#56d4dd"
          },
          "btn": {
            "text": "#c9d1d9",
            "bg": "#21262d",
            "border": "rgba(240,246,252,0.1)",
            "hoverBg": "#30363d",
            "hoverBorder": "#8b949e",
            "activeBg": "hsla(212,12%,18%,1)",
            "activeBorder": "#6e7681",
            "selectedBg": "#161b22",
            "focusBg": "#21262d",
            "focusBorder": "#8b949e",
            "counterBg": "#30363d",
            "primary": {
              "text": "#ffffff",
              "bg": "#238636",
              "border": "rgba(240,246,252,0.1)",
              "hoverBg": "#2ea043",
              "hoverBorder": "rgba(240,246,252,0.1)",
              "selectedBg": "#238636",
              "disabledText": "rgba(240,246,252,0.5)",
              "disabledBg": "rgba(35,134,54,0.6)",
              "disabledBorder": "rgba(240,246,252,0.1)",
              "focusBg": "#238636",
              "focusBorder": "rgba(240,246,252,0.1)",
              "icon": "#f0f6fc",
              "counterBg": "rgba(240,246,252,0.2)"
            },
            "outline": {
              "text": "#58a6ff",
              "hoverText": "#58a6ff",
              "hoverBg": "#30363d",
              "hoverBorder": "rgba(240,246,252,0.1)",
              "hoverCounterBg": "rgba(240,246,252,0.2)",
              "selectedText": "#f0f6fc",
              "selectedBg": "#0d419d",
              "selectedBorder": "rgba(240,246,252,0.1)",
              "disabledText": "rgba(88,166,255,0.5)",
              "disabledBg": "#0d1117",
              "disabledCounterBg": "rgba(31,111,235,0.05)",
              "focusBorder": "rgba(240,246,252,0.1)",
              "counterBg": "rgba(31,111,235,0.1)"
            },
            "danger": {
              "text": "#f85149",
              "hoverText": "#f0f6fc",
              "hoverBg": "#da3633",
              "hoverBorder": "#f85149",
              "hoverIcon": "#f0f6fc",
              "hoverCounterBg": "rgba(255,255,255,0.2)",
              "selectedText": "#ffffff",
              "selectedBg": "#b62324",
              "selectedBorder": "#ff7b72",
              "disabledText": "rgba(248,81,73,0.5)",
              "disabledBg": "#0d1117",
              "disabledCounterBg": "rgba(218,54,51,0.05)",
              "focusBorder": "#f85149",
              "counterBg": "rgba(218,54,51,0.1)",
              "icon": "#f85149"
            }
          },
          "fg": {
            "default": "#c9d1d9",
            "muted": "#8b949e",
            "subtle": "#484f58",
            "onEmphasis": "#f0f6fc"
          },
          "canvas": {
            "default": "#0d1117",
            "overlay": "#161b22",
            "inset": "#010409",
            "subtle": "#161b22"
          },
          "neutral": {
            "emphasisPlus": "#6e7681",
            "emphasis": "#6e7681",
            "muted": "rgba(110,118,129,0.4)",
            "subtle": "rgba(110,118,129,0.1)"
          },
          "accent": {
            "fg": "#58a6ff",
            "emphasis": "#1f6feb",
            "muted": "rgba(56,139,253,0.4)",
            "subtle": "rgba(56,139,253,0.15)"
          },
          "success": {
            "fg": "#3fb950",
            "emphasis": "#238636",
            "muted": "rgba(46,160,67,0.4)",
            "subtle": "rgba(46,160,67,0.15)"
          },
          "attention": {
            "fg": "#d29922",
            "emphasis": "#9e6a03",
            "muted": "rgba(187,128,9,0.4)",
            "subtle": "rgba(187,128,9,0.15)"
          },
          "severe": {
            "fg": "#db6d28",
            "emphasis": "#bd561d",
            "muted": "rgba(219,109,40,0.4)",
            "subtle": "rgba(219,109,40,0.15)"
          },
          "danger": {
            "fg": "#f85149",
            "emphasis": "#da3633",
            "muted": "rgba(248,81,73,0.4)",
            "subtle": "rgba(248,81,73,0.15)"
          },
          "done": {
            "fg": "#a371f7",
            "emphasis": "#8957e5",
            "muted": "rgba(163,113,247,0.4)",
            "subtle": "rgba(163,113,247,0.15)"
          },
          "sponsors": {
            "fg": "#db61a2",
            "emphasis": "#bf4b8a",
            "muted": "rgba(219,97,162,0.4)",
            "subtle": "rgba(219,97,162,0.15)"
          },
          "primer": {
            "canvas": {
              "backdrop": "rgba(1,4,9,0.8)",
              "sticky": "rgba(13,17,23,0.95)"
            },
            "border": {
              "active": "#F78166",
              "contrast": "rgba(240,246,252,0.2)"
            }
          }
        },
        "shadows": {
          "shadow": {
            "highlight": "0 0 transparent",
            "inset": "0 0 transparent",
            "small": "0 0 transparent",
            "medium": "0 3px 6px #010409",
            "large": "0 8px 24px #010409",
            "extraLarge": "0 12px 48px #010409"
          },
          "state": {
            "focus": {
              "shadow": "0 0 0 3px #0c2d6b"
            }
          },
          "autocomplete": {
            "shadow": "0 3px 6px #010409"
          },
          "dropdown": {
            "shadow": "0 8px 24px #010409"
          },
          "input": {
            "shadow": "0 0 transparent"
          },
          "toast": {
            "shadow": "0 8px 24px #010409"
          },
          "selectMenu": {
            "shadow": "0 8px 24px #010409"
          },
          "checks": {
            "inputShadow": "0 0 0 1px (obj) => get_1.default(obj, path)"
          },
          "avatar": {
            "childShadow": "-2px -2px 0 #0d1117"
          },
          "overlay": {
            "shadow": "0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,0.85)"
          },
          "btn": {
            "shadow": "0 0 transparent",
            "insetShadow": "0 0 transparent",
            "focusShadow": "0 0 0 3px rgba(139,148,158,0.3)",
            "shadowActive": "inset 0 0.15em 0.3em rgba(1,4,9,0.15)",
            "shadowInputFocus": "0 0 0 0.2em rgba(31,111,235,0.3)",
            "primary": {
              "shadow": "0 0 transparent",
              "insetShadow": "0 0 transparent",
              "selectedShadow": "0 0 transparent",
              "focusShadow": "0 0 0 3px rgba(46,164,79,0.4)"
            },
            "outline": {
              "hoverShadow": "0 1px 0 rgba(1,4,9,0.1)",
              "hoverInsetShadow": "inset 0 1px 0 rgba(240,246,252,0.03)",
              "selectedShadow": "0 0 transparent",
              "focusShadow": "0 0 0 3px rgba(17,88,199,0.4)"
            },
            "danger": {
              "hoverShadow": "0 0 transparent",
              "hoverInsetShadow": "0 0 transparent",
              "selectedShadow": "0 0 transparent",
              "focusShadow": "0 0 0 3px rgba(248,81,73,0.4)"
            }
          },
          "primer": {
            "shadow": {
              "highlight": "0 0 transparent",
              "inset": "0 0 transparent",
              "focus": "0 0 0 3px #0c2d6b"
            }
          }
        }
      },
      "dark_dimmed": {
        "colors": {
          "auto": {
            "black": "#cdd9e5",
            "white": "#1c2128",
            "gray": ["#22272e", "#2d333b", "#373e47", "#444c56", "#545d68", "#636e7b", "#768390", "#909dab", "#adbac7", "#cdd9e5"],
            "blue": ["#0f2d5c", "#143d79", "#1b4b91", "#255ab2", "#316dca", "#4184e4", "#539bf5", "#6cb6ff", "#96d0ff", "#c6e6ff"],
            "green": ["#113417", "#1b4721", "#245829", "#2b6a30", "#347d39", "#46954a", "#57ab5a", "#6bc46d", "#8ddb8c", "#b4f1b4"],
            "yellow": ["#452700", "#593600", "#6c4400", "#805400", "#966600", "#ae7c14", "#c69026", "#daaa3f", "#eac55f", "#fbe090"],
            "orange": ["#4d210c", "#682d0f", "#7f3913", "#94471b", "#ae5622", "#cc6b2c", "#e0823d", "#f69d50", "#ffbc6f", "#ffddb0"],
            "red": ["#78191b", "#78191b", "#922323", "#ad2e2c", "#c93c37", "#e5534b", "#f47067", "#ff938a", "#ffb8b0", "#ffd8d3"],
            "purple": ["#352160", "#472c82", "#5936a2", "#6b44bc", "#8256d0", "#986ee2", "#b083f0", "#dcbdfb", "#dcbdfb", "#eedcff"],
            "pink": ["#551639", "#69264a", "#7e325a", "#983b6e", "#ae4c82", "#c96198", "#e275ad", "#fc8dc7", "#ffb3d8", "#ffd7eb"]
          },
          "text": {
            "primary": "#adbac7",
            "secondary": "#768390",
            "tertiary": "#768390",
            "placeholder": "#545d68",
            "disabled": "#768390",
            "inverse": "#cdd9e5",
            "link": "#539bf5",
            "danger": "#e5534b",
            "success": "#57ab5a",
            "warning": "#c69026",
            "white": "#cdd9e5"
          },
          "icon": {
            "primary": "#adbac7",
            "secondary": "#768390",
            "tertiary": "#768390",
            "info": "#539bf5",
            "danger": "#e5534b",
            "success": "#57ab5a",
            "warning": "#c69026"
          },
          "border": {
            "primary": "#444c56",
            "secondary": "#373e47",
            "tertiary": "#444c56",
            "overlay": "#444c56",
            "inverse": "#cdd9e5",
            "info": "#316dca",
            "danger": "#c93c37",
            "success": "#347d39",
            "warning": "#966600",
            "default": "#444c56",
            "muted": "#373e47",
            "subtle": "rgba(205,217,229,0.1)"
          },
          "bg": {
            "canvas": "#22272e",
            "canvasMobile": "rgba(0,0,0,0)",
            "canvasInverse": "#636e7b",
            "canvasInset": "#1c2128",
            "primary": "#22272e",
            "secondary": "#2d333b",
            "tertiary": "#2d333b",
            "overlay": "#2d333b",
            "backdrop": "rgba(28,33,40,0.8)",
            "info": "rgba(65,132,228,0.15)",
            "infoInverse": "#316dca",
            "danger": "rgba(229,83,75,0.15)",
            "dangerInverse": "#c93c37",
            "success": "rgba(70,149,74,0.15)",
            "successInverse": "#347d39",
            "warning": "rgba(174,124,20,0.15)",
            "warningInverse": "#966600"
          },
          "state": {
            "hover": {
              "primaryBg": "#316dca",
              "primaryBorder": "#316dca",
              "primaryText": "#cdd9e5",
              "primaryIcon": "#cdd9e5",
              "secondaryBg": "rgba(99,110,123,0.1)",
              "secondaryBorder": "rgba(99,110,123,0.1)"
            },
            "selected": {
              "primaryBg": "#316dca",
              "primaryBorder": "#316dca",
              "primaryText": "#cdd9e5",
              "primaryIcon": "#cdd9e5"
            },
            "focus": {
              "border": "#316dca"
            }
          },
          "fade": {
            "fg10": "rgba(205,217,229,0.1)",
            "fg15": "rgba(205,217,229,0.15)",
            "fg30": "rgba(205,217,229,0.3)",
            "fg50": "rgba(205,217,229,0.5)",
            "fg70": "rgba(205,217,229,0.7)",
            "fg85": "rgba(205,217,229,0.85)",
            "black10": "rgba(28,33,40,0.1)",
            "black15": "rgba(28,33,40,0.15)",
            "black30": "rgba(28,33,40,0.3)",
            "black50": "rgba(28,33,40,0.5)",
            "black70": "rgba(28,33,40,0.7)",
            "black85": "rgba(28,33,40,0.85)",
            "white10": "rgba(205,217,229,0.1)",
            "white15": "rgba(205,217,229,0.15)",
            "white30": "rgba(205,217,229,0.3)",
            "white50": "rgba(205,217,229,0.5)",
            "white70": "rgba(205,217,229,0.7)",
            "white85": "rgba(205,217,229,0.85)"
          },
          "alert": {
            "info": {
              "text": "#adbac7",
              "icon": "#539bf5",
              "bg": "rgba(65,132,228,0.15)",
              "border": "rgba(65,132,228,0.4)"
            },
            "warn": {
              "text": "#adbac7",
              "icon": "#c69026",
              "bg": "rgba(174,124,20,0.15)",
              "border": "rgba(174,124,20,0.4)"
            },
            "error": {
              "text": "#adbac7",
              "icon": "#e5534b",
              "bg": "rgba(229,83,75,0.15)",
              "border": "rgba(229,83,75,0.4)"
            },
            "success": {
              "text": "#adbac7",
              "icon": "#57ab5a",
              "bg": "rgba(70,149,74,0.15)",
              "border": "rgba(70,149,74,0.4)"
            }
          },
          "autocomplete": {
            "rowBorder": "#373e47"
          },
          "blankslate": {
            "icon": "#768390"
          },
          "counter": {
            "text": "#adbac7",
            "bg": "rgba(99,110,123,0.4)",
            "primary": {
              "text": "#cdd9e5",
              "bg": "#636e7b"
            },
            "secondary": {
              "text": "#768390",
              "bg": "rgba(99,110,123,0.1)"
            }
          },
          "box": {
            "blueBorder": "rgba(65,132,228,0.4)",
            "rowYellowBg": "rgba(174,124,20,0.15)",
            "rowBlueBg": "rgba(65,132,228,0.15)",
            "headerBlueBg": "rgba(65,132,228,0.15)",
            "headerBlueBorder": "rgba(65,132,228,0.4)",
            "borderInfo": "rgba(65,132,228,0.4)",
            "bgInfo": "rgba(65,132,228,0.15)",
            "borderWarning": "rgba(174,124,20,0.4)",
            "bgWarning": "rgba(174,124,20,0.15)"
          },
          "branchName": {
            "text": "#768390",
            "icon": "#768390",
            "bg": "rgba(65,132,228,0.15)",
            "link": {
              "text": "#539bf5",
              "icon": "#539bf5",
              "bg": "rgba(65,132,228,0.15)"
            }
          },
          "markdown": {
            "codeBg": "rgba(99,110,123,0.4)",
            "frameBorder": "#444c56",
            "blockquoteBorder": "#444c56",
            "tableBorder": "#444c56",
            "tableTrBorder": "#373e47"
          },
          "filterItem": {
            "barBg": "rgba(99,110,123,0.1)"
          },
          "hiddenTextExpander": {
            "bg": "rgba(99,110,123,0.4)",
            "bgHover": "rgba(65,132,228,0.4)"
          },
          "dragAndDrop": {
            "border": "#444c56"
          },
          "uploadEnabled": {
            "border": "#444c56",
            "borderFocused": "#316dca"
          },
          "previewableCommentForm": {
            "border": "#444c56"
          },
          "verifiedBadge": {
            "text": "#57ab5a",
            "bg": "#22272e",
            "border": "#444c56"
          },
          "socialCount": {
            "bg": "#22272e"
          },
          "tooltip": {
            "text": "#cdd9e5",
            "bg": "#636e7b"
          },
          "filesExplorerIcon": "#539bf5",
          "hlAuthorBg": "rgba(65,132,228,0.15)",
          "hlAuthorBorder": "rgba(65,132,228,0.4)",
          "logoSubdued": "rgba(99,110,123,0.4)",
          "discussionBorder": "rgba(70,149,74,0.4)",
          "discussionBgSuccess": "#347d39",
          "actionsWorkflowTableStickyBg": "rgba(34,39,46,0.95)",
          "repoLanguageColorBorder": "rgba(205,217,229,0.2)",
          "codeSelectionBg": "rgba(65,132,228,0.4)",
          "highlight": {
            "text": "#adbac7",
            "bg": "rgba(174,124,20,0.15)"
          },
          "blob": {
            "lineHighlightBg": "rgba(174,124,20,0.15)",
            "lineHighlightBorder": "rgba(174,124,20,0.4)"
          },
          "topicTag": {
            "text": "#539bf5",
            "bg": "rgba(65,132,228,0.15)",
            "hoverBg": "#316dca",
            "activeBg": "rgba(65,132,228,0.15)",
            "border": "rgba(0,0,0,0)"
          },
          "footerInvertocat": {
            "octicon": "#545d68",
            "octiconHover": "#768390"
          },
          "label": {
            "border": "#444c56",
            "primary": {
              "text": "#adbac7",
              "border": "#636e7b"
            },
            "secondary": {
              "text": "#768390",
              "border": "#444c56"
            },
            "info": {
              "text": "#539bf5",
              "border": "#316dca"
            },
            "success": {
              "text": "#57ab5a",
              "border": "#347d39"
            },
            "warning": {
              "text": "#c69026",
              "border": "#966600"
            },
            "danger": {
              "text": "#e5534b",
              "border": "#c93c37"
            },
            "orange": {
              "text": "#cc6b2c",
              "border": "#ae5622"
            }
          },
          "input": {
            "bg": "#22272e",
            "contrastBg": "#1c2128",
            "border": "#444c56",
            "disabledBorder": "#444c56",
            "warningBorder": "#966600",
            "errorBorder": "#c93c37",
            "tooltip": {
              "success": {
                "text": "#adbac7",
                "bg": "rgba(70,149,74,0.15)",
                "border": "rgba(70,149,74,0.4)"
              },
              "warning": {
                "text": "#adbac7",
                "bg": "rgba(174,124,20,0.15)",
                "border": "rgba(174,124,20,0.4)"
              },
              "error": {
                "text": "#adbac7",
                "bg": "rgba(229,83,75,0.15)",
                "border": "rgba(229,83,75,0.4)"
              }
            },
            "disabledBg": "rgba(99,110,123,0)"
          },
          "toast": {
            "text": "#adbac7",
            "bg": "#22272e",
            "border": "#444c56",
            "icon": "#cdd9e5",
            "iconBg": "#316dca",
            "iconBorder": "rgba(0,0,0,0)",
            "success": {
              "text": "#adbac7",
              "border": "#444c56",
              "icon": "#cdd9e5",
              "iconBg": "#347d39",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "warning": {
              "text": "#adbac7",
              "border": "#444c56",
              "icon": "#adbac7",
              "iconBg": "#966600",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "danger": {
              "text": "#adbac7",
              "border": "#444c56",
              "icon": "#cdd9e5",
              "iconBg": "#c93c37",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "loading": {
              "text": "#adbac7",
              "border": "#444c56",
              "icon": "#cdd9e5",
              "iconBg": "#636e7b",
              "iconBorder": "rgba(0,0,0,0)"
            }
          },
          "timeline": {
            "text": "#768390",
            "badgeSuccessBorder": "rgba(0,0,0,0)",
            "targetBadgeBorder": "#316dca",
            "targetBadgeShadow": "rgba(65,132,228,0.4)",
            "badgeBg": "#373e47"
          },
          "diffstat": {
            "neutralBg": "rgba(99,110,123,0.4)",
            "neutralBorder": "rgba(205,217,229,0.1)",
            "deletionBorder": "rgba(205,217,229,0.1)",
            "additionBorder": "rgba(205,217,229,0.1)",
            "deletionBg": "#c93c37",
            "additionBg": "#57ab5a"
          },
          "diff": {
            "addition": {
              "text": "#adbac7",
              "bg": "rgba(70,149,74,0.15)",
              "border": "rgba(70,149,74,0.4)"
            },
            "deletion": {
              "text": "#adbac7",
              "bg": "rgba(229,83,75,0.15)",
              "border": "rgba(229,83,75,0.4)"
            },
            "change": {
              "text": "#c69026",
              "bg": "rgba(174,124,20,0.15)",
              "border": "rgba(174,124,20,0.4)"
            }
          },
          "mergeBox": {
            "successIconBg": "#347d39",
            "successIconText": "#cdd9e5",
            "successIconBorder": "rgba(0,0,0,0)",
            "successIndicatorBg": "#347d39",
            "successIndicatorBorder": "rgba(0,0,0,0)",
            "mergedIconBg": "#8256d0",
            "mergedIconText": "#cdd9e5",
            "mergedIconBorder": "rgba(0,0,0,0)",
            "mergedBoxBorder": "#8256d0",
            "neutralIconBg": "#636e7b",
            "neutralIconText": "#cdd9e5",
            "neutralIconBorder": "rgba(0,0,0,0)",
            "neutralIndicatorBg": "#636e7b",
            "neutralIndicatorBorder": "rgba(0,0,0,0)",
            "warningIconBg": "#966600",
            "warningIconText": "#cdd9e5",
            "warningIconBorder": "rgba(0,0,0,0)",
            "warningBoxBorder": "#966600",
            "warningMergeHighlight": "rgba(0,0,0,0)",
            "errorIconBg": "#c93c37",
            "errorIconText": "#cdd9e5",
            "errorIconBorder": "rgba(0,0,0,0)",
            "errorIndicatorBg": "#c93c37",
            "errorIndicatorBorder": "rgba(0,0,0,0)"
          },
          "underlinenav": {
            "border": "rgba(0,0,0,0)",
            "borderHover": "rgba(99,110,123,0.4)",
            "borderActive": "#EC775C",
            "text": "#adbac7",
            "textHover": "#adbac7",
            "textActive": "#adbac7",
            "icon": "#545d68",
            "iconHover": "#545d68",
            "iconActive": "#adbac7",
            "counterText": "#adbac7",
            "counterBg": "rgba(99,110,123,0.4)"
          },
          "selectMenu": {
            "borderSecondary": "#373e47",
            "backdropBg": "rgba(28,33,40,0.8)",
            "backdropBorder": "#545d68",
            "tapHighlight": "rgba(68,76,86,0.5)",
            "tapFocusBg": "#143d79"
          },
          "sidenav": {
            "borderActive": "#EC775C",
            "selectedBg": "#373e47"
          },
          "menu": {
            "headingText": "#adbac7",
            "borderActive": "#EC775C",
            "bgActive": "#2d333b"
          },
          "project": {
            "cardBg": "#2d333b",
            "headerBg": "#22272e",
            "sidebarBg": "#2d333b",
            "gradientIn": "#2d333b",
            "gradientOut": "rgba(45,51,59,0)"
          },
          "prState": {
            "draft": {
              "text": "#cdd9e5",
              "bg": "#636e7b",
              "border": "rgba(0,0,0,0)"
            },
            "open": {
              "text": "#cdd9e5",
              "bg": "#347d39",
              "border": "rgba(0,0,0,0)"
            },
            "merged": {
              "text": "#cdd9e5",
              "bg": "#8256d0",
              "border": "rgba(0,0,0,0)"
            },
            "closed": {
              "text": "#cdd9e5",
              "bg": "#c93c37",
              "border": "rgba(0,0,0,0)"
            }
          },
          "diffBlob": {
            "numText": "#545d68",
            "numHoverText": "#adbac7",
            "addition": {
              "numHoverText": "#adbac7",
              "numText": "#adbac7",
              "fg": "#adbac7",
              "numBg": "rgba(87,171,90,0.3)",
              "lineBg": "rgba(70,149,74,0.15)",
              "wordBg": "rgba(70,149,74,0.4)"
            },
            "deletion": {
              "numHoverText": "#adbac7",
              "numText": "#adbac7",
              "fg": "#adbac7",
              "numBg": "rgba(229,83,75,0.3)",
              "lineBg": "rgba(229,83,75,0.15)",
              "wordBg": "rgba(229,83,75,0.4)"
            },
            "hunk": {
              "text": "#768390",
              "numBg": "rgba(65,132,228,0.4)",
              "lineBg": "rgba(65,132,228,0.15)"
            },
            "emptyBlockBg": "rgba(99,110,123,0.1)",
            "selectedLineHighlightBg": "rgba(174,124,20,0.15)",
            "selectedLineHighlightBorder": "rgba(174,124,20,0.4)",
            "expander": {
              "hoverIcon": "#cdd9e5",
              "hoverBg": "#316dca",
              "icon": "#768390"
            },
            "commentButton": {
              "icon": "#cdd9e5",
              "bg": "#316dca",
              "gradientBg": "rgba(0,0,0,0)"
            }
          },
          "globalNav": {
            "logo": "#cdd9e5",
            "bg": "#2d333b",
            "text": "#adbac7",
            "icon": "#adbac7",
            "inputBg": "#22272e",
            "inputBorder": "#373e47",
            "inputIcon": "#373e47",
            "inputPlaceholder": "#545d68"
          },
          "introShelf": {
            "gradientLeft": "rgba(65,132,228,0.15)",
            "gradientRight": "rgba(70,149,74,0.15)",
            "gradientIn": "#22272e",
            "gradientOut": "rgba(205,217,229,0)"
          },
          "canvasDefaultTransparent": "rgba(34,39,46,0)",
          "marketingIcon": {
            "primary": "#6cb6ff",
            "secondary": "#316dca"
          },
          "searchKeyword": {
            "hl": "rgba(198,144,38,0.4)"
          },
          "prettylights": {
            "syntax": {
              "comment": "#768390",
              "constant": "#6cb6ff",
              "entity": "#dcbdfb",
              "storageModifierImport": "#adbac7",
              "entityTag": "#8ddb8c",
              "keyword": "#f47067",
              "string": "#96d0ff",
              "variable": "#f69d50",
              "brackethighlighterUnmatched": "#e5534b",
              "invalidIllegalText": "#cdd9e5",
              "invalidIllegalBg": "#922323",
              "carriageReturnText": "#cdd9e5",
              "carriageReturnBg": "#ad2e2c",
              "stringRegexp": "#8ddb8c",
              "markupList": "#eac55f",
              "markupHeading": "#316dca",
              "markupItalic": "#adbac7",
              "markupBold": "#adbac7",
              "markupDeletedText": "#ffd8d3",
              "markupDeletedBg": "#78191b",
              "markupInsertedText": "#b4f1b4",
              "markupInsertedBg": "#1b4721",
              "markupChangedText": "#ffddb0",
              "markupChangedBg": "#682d0f",
              "markupIgnoredText": "#adbac7",
              "markupIgnoredBg": "#255ab2",
              "metaDiffRange": "#dcbdfb",
              "brackethighlighterAngle": "#768390",
              "sublimelinterGutterMark": "#545d68",
              "constantOtherReferenceLink": "#96d0ff"
            }
          },
          "codemirror": {
            "text": "#adbac7",
            "bg": "#22272e",
            "guttersBg": "#22272e",
            "guttermarkerText": "#22272e",
            "guttermarkerSubtleText": "#545d68",
            "linenumberText": "#768390",
            "cursor": "#adbac7",
            "selectionBg": "rgba(65,132,228,0.4)",
            "activelineBg": "rgba(99,110,123,0.1)",
            "matchingbracketText": "#adbac7",
            "linesBg": "#22272e",
            "syntax": {
              "comment": "#768390",
              "constant": "#6cb6ff",
              "entity": "#dcbdfb",
              "keyword": "#f47067",
              "storage": "#f47067",
              "string": "#96d0ff",
              "support": "#6cb6ff",
              "variable": "#f69d50"
            }
          },
          "checks": {
            "bg": "#1c2128",
            "textPrimary": "#adbac7",
            "textSecondary": "#768390",
            "textLink": "#539bf5",
            "btnIcon": "#768390",
            "btnHoverIcon": "#adbac7",
            "btnHoverBg": "rgba(99,110,123,0.1)",
            "inputText": "#768390",
            "inputPlaceholderText": "#545d68",
            "inputFocusText": "#adbac7",
            "inputBg": "#2d333b",
            "donutError": "#e5534b",
            "donutPending": "#c69026",
            "donutSuccess": "#46954a",
            "donutNeutral": "#768390",
            "dropdownText": "#adbac7",
            "dropdownBg": "#2d333b",
            "dropdownBorder": "#444c56",
            "dropdownShadow": "rgba(28,33,40,0.3)",
            "dropdownHoverText": "#adbac7",
            "dropdownHoverBg": "rgba(99,110,123,0.1)",
            "dropdownBtnHoverText": "#adbac7",
            "dropdownBtnHoverBg": "rgba(99,110,123,0.1)",
            "scrollbarThumbBg": "rgba(99,110,123,0.4)",
            "headerLabelText": "#768390",
            "headerLabelOpenText": "#adbac7",
            "headerBorder": "#373e47",
            "headerIcon": "#768390",
            "lineText": "#768390",
            "lineNumText": "#545d68",
            "lineTimestampText": "#545d68",
            "lineHoverBg": "rgba(99,110,123,0.1)",
            "lineSelectedBg": "rgba(65,132,228,0.15)",
            "lineSelectedNumText": "#539bf5",
            "lineDtFmText": "#cdd9e5",
            "lineDtFmBg": "#966600",
            "gateBg": "rgba(174,124,20,0.15)",
            "gateText": "#768390",
            "gateWaitingText": "#c69026",
            "stepHeaderOpenBg": "#2d333b",
            "stepErrorText": "#e5534b",
            "stepWarningText": "#c69026",
            "loglineText": "#768390",
            "loglineNumText": "#545d68",
            "loglineDebugText": "#986ee2",
            "loglineErrorText": "#768390",
            "loglineErrorNumText": "#545d68",
            "loglineErrorBg": "rgba(229,83,75,0.15)",
            "loglineWarningText": "#768390",
            "loglineWarningNumText": "#c69026",
            "loglineWarningBg": "rgba(174,124,20,0.15)",
            "loglineCommandText": "#539bf5",
            "loglineSectionText": "#57ab5a",
            "ansi": {
              "black": "#22272e",
              "blackBright": "#2d333b",
              "white": "#909dab",
              "whiteBright": "#909dab",
              "gray": "#636e7b",
              "red": "#f47067",
              "redBright": "#ff938a",
              "green": "#57ab5a",
              "greenBright": "#6bc46d",
              "yellow": "#c69026",
              "yellowBright": "#daaa3f",
              "blue": "#539bf5",
              "blueBright": "#6cb6ff",
              "magenta": "#b083f0",
              "magentaBright": "#dcbdfb",
              "cyan": "#76e3ea",
              "cyanBright": "#b3f0ff"
            }
          },
          "mktg": {
            "success": "rgba(61,137,66,1)",
            "info": "rgba(56,119,213,1)",
            "bgShadeGradient": {
              "top": "rgba(28,33,40,0.065)",
              "bottom": "rgba(28,33,40,0)"
            },
            "btn": {
              "bg": {
                "top": "hsla(228,82%,66%,1)",
                "bottom": "#4969ed"
              },
              "bgOverlay": {
                "top": "hsla(228,74%,59%,1)",
                "bottom": "#3355e0"
              },
              "text": "#cdd9e5",
              "primary": {
                "bg": {
                  "top": "hsla(137,56%,46%,1)",
                  "bottom": "#2ea44f"
                },
                "bgOverlay": {
                  "top": "hsla(134,60%,38%,1)",
                  "bottom": "#22863a"
                },
                "text": "#cdd9e5"
              },
              "enterprise": {
                "bg": {
                  "top": "hsla(249,100%,72%,1)",
                  "bottom": "#6f57ff"
                },
                "bgOverlay": {
                  "top": "hsla(248,65%,63%,1)",
                  "bottom": "#614eda"
                },
                "text": "#cdd9e5"
              },
              "outline": {
                "text": "#cdd9e5",
                "border": "rgba(205,217,229,0.3)",
                "hover": {
                  "text": "#cdd9e5",
                  "border": "rgba(205,217,229,0.5)"
                },
                "focus": {
                  "border": "#cdd9e5",
                  "borderInset": "rgba(205,217,229,0.5)"
                }
              },
              "dark": {
                "text": "#cdd9e5",
                "border": "rgba(205,217,229,0.3)",
                "hover": {
                  "text": "#cdd9e5",
                  "border": "rgba(205,217,229,0.5)"
                },
                "focus": {
                  "border": "#cdd9e5",
                  "borderInset": "rgba(205,217,229,0.5)"
                }
              }
            }
          },
          "avatar": {
            "bg": "rgba(205,217,229,0.1)",
            "border": "rgba(205,217,229,0.1)",
            "stackFade": "#444c56",
            "stackFadeMore": "#373e47"
          },
          "header": {
            "text": "rgba(205,217,229,0.7)",
            "bg": "#2d333b",
            "logo": "#cdd9e5"
          },
          "headerSearch": {
            "bg": "#22272e",
            "border": "#444c56"
          },
          "ansi": {
            "black": "#545d68",
            "blackBright": "#636e7b",
            "white": "#909dab",
            "whiteBright": "#cdd9e5",
            "gray": "#636e7b",
            "red": "#f47067",
            "redBright": "#ff938a",
            "green": "#57ab5a",
            "greenBright": "#6bc46d",
            "yellow": "#c69026",
            "yellowBright": "#daaa3f",
            "blue": "#539bf5",
            "blueBright": "#6cb6ff",
            "magenta": "#b083f0",
            "magentaBright": "#dcbdfb",
            "cyan": "#39c5cf",
            "cyanBright": "#56d4dd"
          },
          "btn": {
            "text": "#adbac7",
            "bg": "#373e47",
            "border": "rgba(205,217,229,0.1)",
            "hoverBg": "#444c56",
            "hoverBorder": "#768390",
            "activeBg": "hsla(213,12%,27%,1)",
            "activeBorder": "#636e7b",
            "selectedBg": "#2d333b",
            "focusBg": "#373e47",
            "focusBorder": "#768390",
            "counterBg": "#444c56",
            "primary": {
              "text": "#ffffff",
              "bg": "#347d39",
              "border": "rgba(205,217,229,0.1)",
              "hoverBg": "#46954a",
              "hoverBorder": "rgba(205,217,229,0.1)",
              "selectedBg": "#347d39",
              "disabledText": "rgba(205,217,229,0.5)",
              "disabledBg": "rgba(52,125,57,0.6)",
              "disabledBorder": "rgba(205,217,229,0.1)",
              "focusBg": "#347d39",
              "focusBorder": "rgba(205,217,229,0.1)",
              "icon": "#cdd9e5",
              "counterBg": "rgba(205,217,229,0.2)"
            },
            "outline": {
              "text": "#539bf5",
              "hoverText": "#539bf5",
              "hoverBg": "#444c56",
              "hoverBorder": "rgba(205,217,229,0.1)",
              "hoverCounterBg": "rgba(205,217,229,0.2)",
              "selectedText": "#cdd9e5",
              "selectedBg": "#1b4b91",
              "selectedBorder": "rgba(205,217,229,0.1)",
              "disabledText": "rgba(83,155,245,0.5)",
              "disabledBg": "#22272e",
              "disabledCounterBg": "rgba(49,109,202,0.05)",
              "focusBorder": "rgba(205,217,229,0.1)",
              "counterBg": "rgba(49,109,202,0.1)"
            },
            "danger": {
              "text": "#e5534b",
              "hoverText": "#cdd9e5",
              "hoverBg": "#c93c37",
              "hoverBorder": "#e5534b",
              "hoverIcon": "#cdd9e5",
              "hoverCounterBg": "rgba(255,255,255,0.2)",
              "selectedText": "#ffffff",
              "selectedBg": "#ad2e2c",
              "selectedBorder": "#f47067",
              "disabledText": "rgba(229,83,75,0.5)",
              "disabledBg": "#22272e",
              "disabledCounterBg": "rgba(201,60,55,0.05)",
              "focusBorder": "#e5534b",
              "counterBg": "rgba(201,60,55,0.1)",
              "icon": "#e5534b"
            }
          },
          "fg": {
            "default": "#adbac7",
            "muted": "#768390",
            "subtle": "#545d68",
            "onEmphasis": "#cdd9e5"
          },
          "canvas": {
            "default": "#22272e",
            "overlay": "#2d333b",
            "inset": "#1c2128",
            "subtle": "#2d333b"
          },
          "neutral": {
            "emphasisPlus": "#636e7b",
            "emphasis": "#636e7b",
            "muted": "rgba(99,110,123,0.4)",
            "subtle": "rgba(99,110,123,0.1)"
          },
          "accent": {
            "fg": "#539bf5",
            "emphasis": "#316dca",
            "muted": "rgba(65,132,228,0.4)",
            "subtle": "rgba(65,132,228,0.15)"
          },
          "success": {
            "fg": "#57ab5a",
            "emphasis": "#347d39",
            "muted": "rgba(70,149,74,0.4)",
            "subtle": "rgba(70,149,74,0.15)"
          },
          "attention": {
            "fg": "#c69026",
            "emphasis": "#966600",
            "muted": "rgba(174,124,20,0.4)",
            "subtle": "rgba(174,124,20,0.15)"
          },
          "severe": {
            "fg": "#cc6b2c",
            "emphasis": "#ae5622",
            "muted": "rgba(204,107,44,0.4)",
            "subtle": "rgba(204,107,44,0.15)"
          },
          "danger": {
            "fg": "#e5534b",
            "emphasis": "#c93c37",
            "muted": "rgba(229,83,75,0.4)",
            "subtle": "rgba(229,83,75,0.15)"
          },
          "done": {
            "fg": "#986ee2",
            "emphasis": "#8256d0",
            "muted": "rgba(152,110,226,0.4)",
            "subtle": "rgba(152,110,226,0.15)"
          },
          "sponsors": {
            "fg": "#c96198",
            "emphasis": "#ae4c82",
            "muted": "rgba(201,97,152,0.4)",
            "subtle": "rgba(201,97,152,0.15)"
          },
          "primer": {
            "canvas": {
              "backdrop": "rgba(28,33,40,0.8)",
              "sticky": "rgba(34,39,46,0.95)"
            },
            "border": {
              "active": "#EC775C",
              "contrast": "rgba(205,217,229,0.2)"
            }
          }
        },
        "shadows": {
          "shadow": {
            "highlight": "0 0 transparent",
            "inset": "0 0 transparent",
            "small": "0 0 transparent",
            "medium": "0 3px 6px #1c2128",
            "large": "0 8px 24px #1c2128",
            "extraLarge": "0 12px 48px #1c2128"
          },
          "state": {
            "focus": {
              "shadow": "0 0 0 3px #143d79"
            }
          },
          "autocomplete": {
            "shadow": "0 3px 6px #1c2128"
          },
          "dropdown": {
            "shadow": "0 8px 24px #1c2128"
          },
          "input": {
            "shadow": "0 0 transparent"
          },
          "toast": {
            "shadow": "0 8px 24px #1c2128"
          },
          "selectMenu": {
            "shadow": "0 8px 24px #1c2128"
          },
          "checks": {
            "inputShadow": "0 0 0 1px (obj) => get_1.default(obj, path)"
          },
          "avatar": {
            "childShadow": "-2px -2px 0 #22272e"
          },
          "overlay": {
            "shadow": "0 0 0 1px #444c56, 0 16px 32px rgba(28,33,40,0.85)"
          },
          "btn": {
            "shadow": "0 0 transparent",
            "insetShadow": "0 0 transparent",
            "focusShadow": "0 0 0 3px rgba(118,131,144,0.3)",
            "shadowActive": "inset 0 0.15em 0.3em rgba(28,33,40,0.15)",
            "shadowInputFocus": "0 0 0 0.2em rgba(49,109,202,0.3)",
            "primary": {
              "shadow": "0 0 transparent",
              "insetShadow": "0 0 transparent",
              "selectedShadow": "0 0 transparent",
              "focusShadow": "0 0 0 3px rgba(46,164,79,0.4)"
            },
            "outline": {
              "hoverShadow": "0 1px 0 rgba(28,33,40,0.1)",
              "hoverInsetShadow": "inset 0 1px 0 rgba(205,217,229,0.03)",
              "selectedShadow": "0 0 transparent",
              "focusShadow": "0 0 0 3px rgba(37,90,178,0.4)"
            },
            "danger": {
              "hoverShadow": "0 0 transparent",
              "hoverInsetShadow": "0 0 transparent",
              "selectedShadow": "0 0 transparent",
              "focusShadow": "0 0 0 3px rgba(229,83,75,0.4)"
            }
          },
          "primer": {
            "shadow": {
              "highlight": "0 0 transparent",
              "inset": "0 0 transparent",
              "focus": "0 0 0 3px #143d79"
            }
          }
        }
      },
      "dark_high_contrast": {
        "colors": {
          "auto": {
            "black": "#ffffff",
            "white": "#010409",
            "gray": ["#0a0c10", "#272b33", "#272b33", "#525964", "#7a828e", "#9ea7b3", "#bdc4cc", "#d9dee3", "#f0f3f6", "#ffffff"],
            "blue": ["#194fb1", "#1e60d5", "#2672f3", "#318bf8", "#409eff", "#409eff", "#71b7ff", "#91cbff", "#addcff", "#caeaff"],
            "green": ["#006222", "#007728", "#008c2c", "#02a232", "#09b43a", "#09b43a", "#26cd4d", "#4ae168", "#72f088", "#acf7b6"],
            "yellow": ["#7b4900", "#945d02", "#ae7104", "#c88508", "#e09b13", "#e09b13", "#f0b72f", "#f7c843", "#fbd669", "#fbe59e"],
            "orange": ["#8f3c00", "#a74c00", "#bf5e0a", "#d57014", "#e7811d", "#e7811d", "#fe9a2d", "#ffb757", "#ffcf86", "#ffe1b4"],
            "red": ["#ad0116", "#cc1421", "#e82a2f", "#ff4445", "#ff6a69", "#ff6a69", "#ff9492", "#ffb1af", "#ffc9c7", "#ffdedb"],
            "purple": ["#6921d7", "#8031f7", "#954ffd", "#a66bff", "#b87fff", "#b780ff", "#cb9eff", "#dbb7ff", "#e6ccff", "#f0dfff"],
            "pink": ["#9c1d6a", "#b72c7d", "#d23d91", "#e456a3", "#ef6eb1", "#ef6eb1", "#ff8dc7", "#ffadd4", "#ffc7e1", "#ffdceb"]
          },
          "text": {
            "primary": "#f0f3f6",
            "secondary": "#f0f3f6",
            "tertiary": "#f0f3f6",
            "placeholder": "#7a828e",
            "disabled": "#f0f3f6",
            "inverse": "#0a0c10",
            "link": "#71b7ff",
            "danger": "#ff6a69",
            "success": "#26cd4d",
            "warning": "#f0b72f",
            "white": "#ffffff"
          },
          "icon": {
            "primary": "#f0f3f6",
            "secondary": "#f0f3f6",
            "tertiary": "#f0f3f6",
            "info": "#71b7ff",
            "danger": "#ff6a69",
            "success": "#26cd4d",
            "warning": "#f0b72f"
          },
          "border": {
            "primary": "#7a828e",
            "secondary": "#7a828e",
            "tertiary": "#7a828e",
            "overlay": "#7a828e",
            "inverse": "#0a0c10",
            "info": "#409eff",
            "danger": "#ff6a69",
            "success": "#09b43a",
            "warning": "#e09b13",
            "default": "#7a828e",
            "muted": "#7a828e",
            "subtle": "#7a828e"
          },
          "bg": {
            "canvas": "#0a0c10",
            "canvasMobile": "rgba(0,0,0,0)",
            "canvasInverse": "#9ea7b3",
            "canvasInset": "#010409",
            "primary": "#0a0c10",
            "secondary": "#272b33",
            "tertiary": "#272b33",
            "overlay": "#272b33",
            "backdrop": "rgba(1,4,9,0.8)",
            "info": "rgba(64,158,255,0.15)",
            "infoInverse": "#409eff",
            "danger": "rgba(255,106,105,0.15)",
            "dangerInverse": "#ff6a69",
            "success": "rgba(9,180,58,0.15)",
            "successInverse": "#09b43a",
            "warning": "rgba(224,155,19,0.15)",
            "warningInverse": "#e09b13"
          },
          "state": {
            "hover": {
              "primaryBg": "#409eff",
              "primaryBorder": "#409eff",
              "primaryText": "#0a0c10",
              "primaryIcon": "#0a0c10",
              "secondaryBg": "rgba(158,167,179,0.1)",
              "secondaryBorder": "rgba(158,167,179,0.1)"
            },
            "selected": {
              "primaryBg": "#409eff",
              "primaryBorder": "#409eff",
              "primaryText": "#0a0c10",
              "primaryIcon": "#0a0c10"
            },
            "focus": {
              "border": "#409eff"
            }
          },
          "fade": {
            "fg10": "rgba(255,255,255,0.1)",
            "fg15": "rgba(255,255,255,0.15)",
            "fg30": "rgba(255,255,255,0.3)",
            "fg50": "rgba(255,255,255,0.5)",
            "fg70": "rgba(255,255,255,0.7)",
            "fg85": "rgba(255,255,255,0.85)",
            "black10": "rgba(1,4,9,0.1)",
            "black15": "rgba(1,4,9,0.15)",
            "black30": "rgba(1,4,9,0.3)",
            "black50": "rgba(1,4,9,0.5)",
            "black70": "rgba(1,4,9,0.7)",
            "black85": "rgba(1,4,9,0.85)",
            "white10": "rgba(255,255,255,0.1)",
            "white15": "rgba(255,255,255,0.15)",
            "white30": "rgba(255,255,255,0.3)",
            "white50": "rgba(255,255,255,0.5)",
            "white70": "rgba(255,255,255,0.7)",
            "white85": "rgba(255,255,255,0.85)"
          },
          "alert": {
            "info": {
              "text": "#f0f3f6",
              "icon": "#71b7ff",
              "bg": "rgba(64,158,255,0.15)",
              "border": "#409eff"
            },
            "warn": {
              "text": "#f0f3f6",
              "icon": "#f0b72f",
              "bg": "rgba(224,155,19,0.15)",
              "border": "#e09b13"
            },
            "error": {
              "text": "#f0f3f6",
              "icon": "#ff6a69",
              "bg": "rgba(255,106,105,0.15)",
              "border": "#ff6a69"
            },
            "success": {
              "text": "#f0f3f6",
              "icon": "#26cd4d",
              "bg": "rgba(9,180,58,0.15)",
              "border": "#09b43a"
            }
          },
          "autocomplete": {
            "rowBorder": "#7a828e"
          },
          "blankslate": {
            "icon": "#f0f3f6"
          },
          "counter": {
            "text": "#f0f3f6",
            "bg": "rgba(158,167,179,0.4)",
            "primary": {
              "text": "#0a0c10",
              "bg": "#9ea7b3"
            },
            "secondary": {
              "text": "#f0f3f6",
              "bg": "rgba(158,167,179,0.1)"
            }
          },
          "box": {
            "blueBorder": "#409eff",
            "rowYellowBg": "rgba(224,155,19,0.15)",
            "rowBlueBg": "rgba(64,158,255,0.15)",
            "headerBlueBg": "rgba(64,158,255,0.15)",
            "headerBlueBorder": "#409eff",
            "borderInfo": "#409eff",
            "bgInfo": "rgba(64,158,255,0.15)",
            "borderWarning": "#e09b13",
            "bgWarning": "rgba(224,155,19,0.15)"
          },
          "branchName": {
            "text": "#f0f3f6",
            "icon": "#f0f3f6",
            "bg": "rgba(64,158,255,0.15)",
            "link": {
              "text": "#71b7ff",
              "icon": "#71b7ff",
              "bg": "rgba(64,158,255,0.15)"
            }
          },
          "markdown": {
            "codeBg": "rgba(158,167,179,0.4)",
            "frameBorder": "#7a828e",
            "blockquoteBorder": "#7a828e",
            "tableBorder": "#7a828e",
            "tableTrBorder": "#7a828e"
          },
          "filterItem": {
            "barBg": "rgba(158,167,179,0.1)"
          },
          "hiddenTextExpander": {
            "bg": "rgba(158,167,179,0.4)",
            "bgHover": "#409eff"
          },
          "dragAndDrop": {
            "border": "#7a828e"
          },
          "uploadEnabled": {
            "border": "#7a828e",
            "borderFocused": "#409eff"
          },
          "previewableCommentForm": {
            "border": "#7a828e"
          },
          "verifiedBadge": {
            "text": "#26cd4d",
            "bg": "#0a0c10",
            "border": "#7a828e"
          },
          "socialCount": {
            "bg": "#0a0c10"
          },
          "tooltip": {
            "text": "#0a0c10",
            "bg": "#ffffff"
          },
          "filesExplorerIcon": "#71b7ff",
          "hlAuthorBg": "rgba(64,158,255,0.15)",
          "hlAuthorBorder": "#409eff",
          "logoSubdued": "rgba(158,167,179,0.4)",
          "discussionBorder": "#09b43a",
          "discussionBgSuccess": "#09b43a",
          "actionsWorkflowTableStickyBg": "rgba(10,12,16,0.95)",
          "repoLanguageColorBorder": "rgba(255,255,255,0.2)",
          "codeSelectionBg": "#409eff",
          "highlight": {
            "text": "#f0f3f6",
            "bg": "rgba(224,155,19,0.15)"
          },
          "blob": {
            "lineHighlightBg": "rgba(224,155,19,0.15)",
            "lineHighlightBorder": "#e09b13"
          },
          "topicTag": {
            "text": "#71b7ff",
            "bg": "rgba(64,158,255,0.15)",
            "hoverBg": "#409eff",
            "activeBg": "rgba(64,158,255,0.15)",
            "border": "#409eff"
          },
          "footerInvertocat": {
            "octicon": "#7a828e",
            "octiconHover": "#f0f3f6"
          },
          "label": {
            "border": "#7a828e",
            "primary": {
              "text": "#f0f3f6",
              "border": "#9ea7b3"
            },
            "secondary": {
              "text": "#f0f3f6",
              "border": "#7a828e"
            },
            "info": {
              "text": "#71b7ff",
              "border": "#409eff"
            },
            "success": {
              "text": "#26cd4d",
              "border": "#09b43a"
            },
            "warning": {
              "text": "#f0b72f",
              "border": "#e09b13"
            },
            "danger": {
              "text": "#ff6a69",
              "border": "#ff6a69"
            },
            "orange": {
              "text": "#e7811d",
              "border": "#e7811d"
            }
          },
          "input": {
            "bg": "#0a0c10",
            "contrastBg": "#010409",
            "border": "#7a828e",
            "disabledBorder": "#7a828e",
            "warningBorder": "#e09b13",
            "errorBorder": "#ff6a69",
            "tooltip": {
              "success": {
                "text": "#f0f3f6",
                "bg": "rgba(9,180,58,0.15)",
                "border": "#09b43a"
              },
              "warning": {
                "text": "#f0f3f6",
                "bg": "rgba(224,155,19,0.15)",
                "border": "#e09b13"
              },
              "error": {
                "text": "#f0f3f6",
                "bg": "rgba(255,106,105,0.15)",
                "border": "#ff6a69"
              }
            },
            "disabledBg": "rgba(158,167,179,0)"
          },
          "toast": {
            "text": "#f0f3f6",
            "bg": "#0a0c10",
            "border": "#7a828e",
            "icon": "#0a0c10",
            "iconBg": "#409eff",
            "iconBorder": "rgba(0,0,0,0)",
            "success": {
              "text": "#f0f3f6",
              "border": "#7a828e",
              "icon": "#0a0c10",
              "iconBg": "#09b43a",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "warning": {
              "text": "#f0f3f6",
              "border": "#7a828e",
              "icon": "#f0f3f6",
              "iconBg": "#e09b13",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "danger": {
              "text": "#f0f3f6",
              "border": "#7a828e",
              "icon": "#0a0c10",
              "iconBg": "#ff6a69",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "loading": {
              "text": "#f0f3f6",
              "border": "#7a828e",
              "icon": "#0a0c10",
              "iconBg": "#9ea7b3",
              "iconBorder": "rgba(0,0,0,0)"
            }
          },
          "timeline": {
            "text": "#f0f3f6",
            "badgeSuccessBorder": "rgba(0,0,0,0)",
            "targetBadgeBorder": "#409eff",
            "targetBadgeShadow": "#409eff",
            "badgeBg": "#272b33"
          },
          "diffstat": {
            "neutralBg": "rgba(158,167,179,0.4)",
            "neutralBorder": "#7a828e",
            "deletionBorder": "#ffb1af",
            "additionBorder": "#4ae168",
            "deletionBg": "#ff6a69",
            "additionBg": "#26cd4d"
          },
          "diff": {
            "addition": {
              "text": "#f0f3f6",
              "bg": "rgba(9,180,58,0.15)",
              "border": "#09b43a"
            },
            "deletion": {
              "text": "#f0f3f6",
              "bg": "rgba(255,106,105,0.15)",
              "border": "#ff6a69"
            },
            "change": {
              "text": "#f0b72f",
              "bg": "rgba(224,155,19,0.15)",
              "border": "#e09b13"
            }
          },
          "mergeBox": {
            "successIconBg": "#09b43a",
            "successIconText": "#0a0c10",
            "successIconBorder": "rgba(0,0,0,0)",
            "successIndicatorBg": "#09b43a",
            "successIndicatorBorder": "rgba(0,0,0,0)",
            "mergedIconBg": "#b87fff",
            "mergedIconText": "#0a0c10",
            "mergedIconBorder": "rgba(0,0,0,0)",
            "mergedBoxBorder": "#b87fff",
            "neutralIconBg": "#9ea7b3",
            "neutralIconText": "#0a0c10",
            "neutralIconBorder": "rgba(0,0,0,0)",
            "neutralIndicatorBg": "#9ea7b3",
            "neutralIndicatorBorder": "rgba(0,0,0,0)",
            "warningIconBg": "#e09b13",
            "warningIconText": "#0a0c10",
            "warningIconBorder": "rgba(0,0,0,0)",
            "warningBoxBorder": "#e09b13",
            "warningMergeHighlight": "rgba(0,0,0,0)",
            "errorIconBg": "#ff6a69",
            "errorIconText": "#0a0c10",
            "errorIconBorder": "rgba(0,0,0,0)",
            "errorIndicatorBg": "#ff6a69",
            "errorIndicatorBorder": "rgba(0,0,0,0)"
          },
          "underlinenav": {
            "border": "rgba(0,0,0,0)",
            "borderHover": "#bdc4cc",
            "borderActive": "#FF967D",
            "text": "#f0f3f6",
            "textHover": "#f0f3f6",
            "textActive": "#f0f3f6",
            "icon": "#f0f3f6",
            "iconHover": "#7a828e",
            "iconActive": "#f0f3f6",
            "counterText": "#f0f3f6",
            "counterBg": "rgba(158,167,179,0.4)"
          },
          "selectMenu": {
            "borderSecondary": "#7a828e",
            "backdropBg": "rgba(1,4,9,0.8)",
            "backdropBorder": "#7a828e",
            "tapHighlight": "rgba(82,89,100,0.5)",
            "tapFocusBg": "#1e60d5"
          },
          "sidenav": {
            "borderActive": "#FF967D",
            "selectedBg": "#272b33"
          },
          "menu": {
            "headingText": "#f0f3f6",
            "borderActive": "#FF967D",
            "bgActive": "#272b33"
          },
          "project": {
            "cardBg": "#272b33",
            "headerBg": "#0a0c10",
            "sidebarBg": "#272b33",
            "gradientIn": "#272b33",
            "gradientOut": "rgba(39,43,51,0)"
          },
          "prState": {
            "draft": {
              "text": "#0a0c10",
              "bg": "#9ea7b3",
              "border": "rgba(0,0,0,0)"
            },
            "open": {
              "text": "#0a0c10",
              "bg": "#09b43a",
              "border": "rgba(0,0,0,0)"
            },
            "merged": {
              "text": "#0a0c10",
              "bg": "#b87fff",
              "border": "rgba(0,0,0,0)"
            },
            "closed": {
              "text": "#0a0c10",
              "bg": "#ff6a69",
              "border": "rgba(0,0,0,0)"
            }
          },
          "diffBlob": {
            "numText": "#7a828e",
            "numHoverText": "#f0f3f6",
            "addition": {
              "numHoverText": "#f0f3f6",
              "numText": "#f0f3f6",
              "fg": "#0a0c10",
              "numBg": "rgba(38,205,77,0.3)",
              "lineBg": "rgba(9,180,58,0.15)",
              "wordBg": "#09b43a"
            },
            "deletion": {
              "numHoverText": "#f0f3f6",
              "numText": "#f0f3f6",
              "fg": "#0a0c10",
              "numBg": "rgba(255,106,105,0.3)",
              "lineBg": "rgba(255,106,105,0.15)",
              "wordBg": "#ff6a69"
            },
            "hunk": {
              "text": "#f0f3f6",
              "numBg": "rgba(64,158,255,0.4)",
              "lineBg": "rgba(64,158,255,0.15)"
            },
            "emptyBlockBg": "rgba(158,167,179,0.1)",
            "selectedLineHighlightBg": "rgba(224,155,19,0.15)",
            "selectedLineHighlightBorder": "#e09b13",
            "expander": {
              "hoverIcon": "#0a0c10",
              "hoverBg": "#409eff",
              "icon": "#0a0c10"
            },
            "commentButton": {
              "icon": "#0a0c10",
              "bg": "#409eff",
              "gradientBg": "rgba(0,0,0,0)"
            }
          },
          "globalNav": {
            "logo": "#ffffff",
            "bg": "#272b33",
            "text": "#f0f3f6",
            "icon": "#f0f3f6",
            "inputBg": "#0a0c10",
            "inputBorder": "#272b33",
            "inputIcon": "#272b33",
            "inputPlaceholder": "#7a828e"
          },
          "introShelf": {
            "gradientLeft": "rgba(64,158,255,0.15)",
            "gradientRight": "rgba(9,180,58,0.15)",
            "gradientIn": "#0a0c10",
            "gradientOut": "rgba(255,255,255,0)"
          },
          "canvasDefaultTransparent": "rgba(10,12,16,0)",
          "marketingIcon": {
            "primary": "#91cbff",
            "secondary": "#409eff"
          },
          "searchKeyword": {
            "hl": "rgba(240,183,47,0.4)"
          },
          "prettylights": {
            "syntax": {
              "comment": "#bdc4cc",
              "constant": "#91cbff",
              "entity": "#dbb7ff",
              "storageModifierImport": "#f0f3f6",
              "entityTag": "#72f088",
              "keyword": "#ff9492",
              "string": "#addcff",
              "variable": "#ffb757",
              "brackethighlighterUnmatched": "#ff6a69",
              "invalidIllegalText": "#ffffff",
              "invalidIllegalBg": "#e82a2f",
              "carriageReturnText": "#ffffff",
              "carriageReturnBg": "#ff4445",
              "stringRegexp": "#72f088",
              "markupList": "#fbd669",
              "markupHeading": "#409eff",
              "markupItalic": "#f0f3f6",
              "markupBold": "#f0f3f6",
              "markupDeletedText": "#ffdedb",
              "markupDeletedBg": "#cc1421",
              "markupInsertedText": "#acf7b6",
              "markupInsertedBg": "#007728",
              "markupChangedText": "#ffe1b4",
              "markupChangedBg": "#a74c00",
              "markupIgnoredText": "#f0f3f6",
              "markupIgnoredBg": "#318bf8",
              "metaDiffRange": "#dbb7ff",
              "brackethighlighterAngle": "#bdc4cc",
              "sublimelinterGutterMark": "#7a828e",
              "constantOtherReferenceLink": "#addcff"
            }
          },
          "codemirror": {
            "text": "#f0f3f6",
            "bg": "#0a0c10",
            "guttersBg": "#0a0c10",
            "guttermarkerText": "#0a0c10",
            "guttermarkerSubtleText": "#7a828e",
            "linenumberText": "#f0f3f6",
            "cursor": "#f0f3f6",
            "selectionBg": "rgba(64,158,255,0.4)",
            "activelineBg": "rgba(158,167,179,0.1)",
            "matchingbracketText": "#f0f3f6",
            "linesBg": "#0a0c10",
            "syntax": {
              "comment": "#bdc4cc",
              "constant": "#91cbff",
              "entity": "#dbb7ff",
              "keyword": "#ff9492",
              "storage": "#ff9492",
              "string": "#addcff",
              "support": "#91cbff",
              "variable": "#ffb757"
            }
          },
          "checks": {
            "bg": "#010409",
            "textPrimary": "#f0f3f6",
            "textSecondary": "#f0f3f6",
            "textLink": "#71b7ff",
            "btnIcon": "#f0f3f6",
            "btnHoverIcon": "#f0f3f6",
            "btnHoverBg": "rgba(158,167,179,0.1)",
            "inputText": "#f0f3f6",
            "inputPlaceholderText": "#7a828e",
            "inputFocusText": "#f0f3f6",
            "inputBg": "#272b33",
            "donutError": "#ff6a69",
            "donutPending": "#f0b72f",
            "donutSuccess": "#09b43a",
            "donutNeutral": "#bdc4cc",
            "dropdownText": "#f0f3f6",
            "dropdownBg": "#272b33",
            "dropdownBorder": "#7a828e",
            "dropdownShadow": "rgba(1,4,9,0.3)",
            "dropdownHoverText": "#f0f3f6",
            "dropdownHoverBg": "rgba(158,167,179,0.1)",
            "dropdownBtnHoverText": "#f0f3f6",
            "dropdownBtnHoverBg": "rgba(158,167,179,0.1)",
            "scrollbarThumbBg": "rgba(158,167,179,0.4)",
            "headerLabelText": "#f0f3f6",
            "headerLabelOpenText": "#f0f3f6",
            "headerBorder": "#7a828e",
            "headerIcon": "#f0f3f6",
            "lineText": "#f0f3f6",
            "lineNumText": "#7a828e",
            "lineTimestampText": "#7a828e",
            "lineHoverBg": "rgba(158,167,179,0.1)",
            "lineSelectedBg": "rgba(64,158,255,0.15)",
            "lineSelectedNumText": "#71b7ff",
            "lineDtFmText": "#0a0c10",
            "lineDtFmBg": "#e09b13",
            "gateBg": "rgba(224,155,19,0.15)",
            "gateText": "#f0f3f6",
            "gateWaitingText": "#f0b72f",
            "stepHeaderOpenBg": "#272b33",
            "stepErrorText": "#ff6a69",
            "stepWarningText": "#f0b72f",
            "loglineText": "#f0f3f6",
            "loglineNumText": "#7a828e",
            "loglineDebugText": "#b780ff",
            "loglineErrorText": "#f0f3f6",
            "loglineErrorNumText": "#7a828e",
            "loglineErrorBg": "rgba(255,106,105,0.15)",
            "loglineWarningText": "#f0f3f6",
            "loglineWarningNumText": "#f0b72f",
            "loglineWarningBg": "rgba(224,155,19,0.15)",
            "loglineCommandText": "#71b7ff",
            "loglineSectionText": "#26cd4d",
            "ansi": {
              "black": "#0a0c10",
              "blackBright": "#272b33",
              "white": "#d9dee3",
              "whiteBright": "#d9dee3",
              "gray": "#9ea7b3",
              "red": "#ff9492",
              "redBright": "#ffb1af",
              "green": "#26cd4d",
              "greenBright": "#4ae168",
              "yellow": "#f0b72f",
              "yellowBright": "#f7c843",
              "blue": "#71b7ff",
              "blueBright": "#91cbff",
              "magenta": "#cb9eff",
              "magentaBright": "#dbb7ff",
              "cyan": "#76e3ea",
              "cyanBright": "#b3f0ff"
            }
          },
          "mktg": {
            "success": "rgba(9,180,58,1)",
            "info": "rgba(64,158,255,1)",
            "bgShadeGradient": {
              "top": "rgba(1,4,9,0.065)",
              "bottom": "rgba(1,4,9,0)"
            },
            "btn": {
              "bg": {
                "top": "hsla(228,82%,66%,1)",
                "bottom": "#4969ed"
              },
              "bgOverlay": {
                "top": "hsla(228,74%,59%,1)",
                "bottom": "#3355e0"
              },
              "text": "#ffffff",
              "primary": {
                "bg": {
                  "top": "hsla(137,56%,46%,1)",
                  "bottom": "#2ea44f"
                },
                "bgOverlay": {
                  "top": "hsla(134,60%,38%,1)",
                  "bottom": "#22863a"
                },
                "text": "#ffffff"
              },
              "enterprise": {
                "bg": {
                  "top": "hsla(249,100%,72%,1)",
                  "bottom": "#6f57ff"
                },
                "bgOverlay": {
                  "top": "hsla(248,65%,63%,1)",
                  "bottom": "#614eda"
                },
                "text": "#ffffff"
              },
              "outline": {
                "text": "#ffffff",
                "border": "rgba(255,255,255,0.3)",
                "hover": {
                  "text": "#ffffff",
                  "border": "rgba(255,255,255,0.5)"
                },
                "focus": {
                  "border": "#ffffff",
                  "borderInset": "rgba(255,255,255,0.5)"
                }
              },
              "dark": {
                "text": "#ffffff",
                "border": "rgba(255,255,255,0.3)",
                "hover": {
                  "text": "#ffffff",
                  "border": "rgba(255,255,255,0.5)"
                },
                "focus": {
                  "border": "#ffffff",
                  "borderInset": "rgba(255,255,255,0.5)"
                }
              }
            }
          },
          "avatar": {
            "bg": "rgba(255,255,255,0.1)",
            "border": "rgba(255,255,255,0.9)",
            "stackFade": "#525964",
            "stackFadeMore": "#272b33"
          },
          "header": {
            "text": "rgba(255,255,255,0.7)",
            "bg": "#272b33",
            "logo": "#ffffff"
          },
          "headerSearch": {
            "bg": "#0a0c10",
            "border": "#525964"
          },
          "ansi": {
            "black": "#7a828e",
            "blackBright": "#9ea7b3",
            "white": "#d9dee3",
            "whiteBright": "#ffffff",
            "gray": "#9ea7b3",
            "red": "#ff9492",
            "redBright": "#ffb1af",
            "green": "#26cd4d",
            "greenBright": "#4ae168",
            "yellow": "#f0b72f",
            "yellowBright": "#f7c843",
            "blue": "#71b7ff",
            "blueBright": "#91cbff",
            "magenta": "#cb9eff",
            "magentaBright": "#dbb7ff",
            "cyan": "#39c5cf",
            "cyanBright": "#56d4dd"
          },
          "btn": {
            "text": "#f0f3f6",
            "bg": "#272b33",
            "border": "#7a828e",
            "hoverBg": "#525964",
            "hoverBorder": "#bdc4cc",
            "activeBg": "hsla(217,10%,33%,1)",
            "activeBorder": "#9ea7b3",
            "selectedBg": "rgba(82,89,100,0.9)",
            "focusBg": "#272b33",
            "focusBorder": "#bdc4cc",
            "counterBg": "#525964",
            "primary": {
              "text": "#0a0c10",
              "bg": "#09b43a",
              "border": "#4ae168",
              "hoverBg": "#26cd4d",
              "hoverBorder": "#4ae168",
              "selectedBg": "#09b43a",
              "disabledText": "rgba(10,12,16,0.5)",
              "disabledBg": "rgba(9,180,58,0.6)",
              "disabledBorder": "rgba(74,225,104,0.4)",
              "focusBg": "#09b43a",
              "focusBorder": "#7a828e",
              "icon": "#0a0c10",
              "counterBg": "rgba(1,4,9,0.15)"
            },
            "outline": {
              "text": "#71b7ff",
              "hoverText": "#71b7ff",
              "hoverBg": "#525964",
              "hoverBorder": "#7a828e",
              "hoverCounterBg": "rgba(255,255,255,0.2)",
              "selectedText": "#ffffff",
              "selectedBg": "#2672f3",
              "selectedBorder": "#7a828e",
              "disabledText": "rgba(113,183,255,0.5)",
              "disabledBg": "#0a0c10",
              "disabledCounterBg": "rgba(64,158,255,0.05)",
              "focusBorder": "#7a828e",
              "counterBg": "rgba(64,158,255,0.1)"
            },
            "danger": {
              "text": "#ff6a69",
              "hoverText": "#0a0c10",
              "hoverBg": "#ff6a69",
              "hoverBorder": "#ff6a69",
              "hoverIcon": "#0a0c10",
              "hoverCounterBg": "rgba(1,4,9,0.15)",
              "selectedText": "#ffffff",
              "selectedBg": "#ff4445",
              "selectedBorder": "#ff9492",
              "disabledText": "rgba(255,106,105,0.5)",
              "disabledBg": "#0a0c10",
              "disabledCounterBg": "rgba(255,106,105,0.05)",
              "focusBorder": "#ff6a69",
              "counterBg": "rgba(1,4,9,0.15)",
              "icon": "#ff6a69"
            }
          },
          "fg": {
            "default": "#f0f3f6",
            "muted": "#f0f3f6",
            "subtle": "#7a828e",
            "onEmphasis": "#0a0c10"
          },
          "canvas": {
            "default": "#0a0c10",
            "overlay": "#272b33",
            "inset": "#010409",
            "subtle": "#272b33"
          },
          "neutral": {
            "emphasisPlus": "#ffffff",
            "emphasis": "#9ea7b3",
            "muted": "rgba(158,167,179,0.4)",
            "subtle": "rgba(158,167,179,0.1)"
          },
          "accent": {
            "fg": "#71b7ff",
            "emphasis": "#409eff",
            "muted": "#409eff",
            "subtle": "rgba(64,158,255,0.15)"
          },
          "success": {
            "fg": "#26cd4d",
            "emphasis": "#09b43a",
            "muted": "#09b43a",
            "subtle": "rgba(9,180,58,0.15)"
          },
          "attention": {
            "fg": "#f0b72f",
            "emphasis": "#e09b13",
            "muted": "#e09b13",
            "subtle": "rgba(224,155,19,0.15)"
          },
          "severe": {
            "fg": "#e7811d",
            "emphasis": "#e7811d",
            "muted": "#e7811d",
            "subtle": "rgba(231,129,29,0.15)"
          },
          "danger": {
            "fg": "#ff6a69",
            "emphasis": "#ff6a69",
            "muted": "#ff6a69",
            "subtle": "rgba(255,106,105,0.15)"
          },
          "done": {
            "fg": "#b780ff",
            "emphasis": "#b87fff",
            "muted": "#b780ff",
            "subtle": "rgba(183,128,255,0.15)"
          },
          "sponsors": {
            "fg": "#ef6eb1",
            "emphasis": "#ef6eb1",
            "muted": "#ef6eb1",
            "subtle": "rgba(239,110,177,0.15)"
          },
          "primer": {
            "canvas": {
              "backdrop": "rgba(1,4,9,0.8)",
              "sticky": "rgba(10,12,16,0.95)"
            },
            "border": {
              "active": "#FF967D",
              "contrast": "rgba(255,255,255,0.2)"
            }
          }
        },
        "shadows": {
          "shadow": {
            "highlight": "0 0 transparent",
            "inset": "0 0 transparent",
            "small": "0 0 transparent",
            "medium": "0 3px 6px #010409",
            "large": "0 8px 24px #010409",
            "extraLarge": "0 12px 48px #010409"
          },
          "state": {
            "focus": {
              "shadow": "0 0 0 3px #1e60d5"
            }
          },
          "autocomplete": {
            "shadow": "0 3px 6px #010409"
          },
          "dropdown": {
            "shadow": "0 8px 24px #010409"
          },
          "input": {
            "shadow": "0 0 transparent"
          },
          "toast": {
            "shadow": "0 8px 24px #010409"
          },
          "selectMenu": {
            "shadow": "0 8px 24px #010409"
          },
          "checks": {
            "inputShadow": "0 0 0 1px (obj) => get_1.default(obj, path)"
          },
          "avatar": {
            "childShadow": "-2px -2px 0 #0a0c10"
          },
          "overlay": {
            "shadow": "0 0 0 1px #525964, 0 16px 32px rgba(1,4,9,0.85)"
          },
          "btn": {
            "shadow": "0 0 transparent",
            "insetShadow": "0 0 transparent",
            "focusShadow": "0 0 0 3px rgba(189,196,204,0.3)",
            "shadowActive": "inset 0 0.15em 0.3em rgba(1,4,9,0.15)",
            "shadowInputFocus": "0 0 0 0.2em rgba(64,158,255,0.3)",
            "primary": {
              "shadow": "0 0 transparent",
              "insetShadow": "0 0 transparent",
              "selectedShadow": "0 0 transparent",
              "focusShadow": "0 0 0 3px rgba(46,164,79,0.4)"
            },
            "outline": {
              "hoverShadow": "0 1px 0 rgba(1,4,9,0.1)",
              "hoverInsetShadow": "inset 0 1px 0 rgba(255,255,255,0.03)",
              "selectedShadow": "0 0 transparent",
              "focusShadow": "0 0 0 3px rgba(49,139,248,0.4)"
            },
            "danger": {
              "hoverShadow": "0 0 transparent",
              "hoverInsetShadow": "0 0 transparent",
              "selectedShadow": "0 0 transparent",
              "focusShadow": "0 0 0 3px rgba(255,106,105,0.4)"
            }
          },
          "primer": {
            "shadow": {
              "highlight": "0 0 transparent",
              "inset": "0 0 transparent",
              "focus": "0 0 0 3px #1e60d5"
            }
          }
        }
      },
      "dark_protanopia": {
        "colors": {
          "auto": {
            "black": "#f0f6fc",
            "white": "#010409",
            "gray": ["#0d1117", "#161b22", "#21262d", "#30363d", "#484f58", "#6e7681", "#8b949e", "#b1bac4", "#c9d1d9", "#f0f6fc"],
            "blue": ["#051d4d", "#0c2d6b", "#0d419d", "#1158c7", "#1f6feb", "#388bfd", "#58a6ff", "#79c0ff", "#a5d6ff", "#cae8ff"],
            "green": ["#041843", "#0a2861", "#0b3c92", "#0f53bc", "#1d69e0", "#1585fd", "#42a0ff", "#66baff", "#83d4ff", "#a0e8ff"],
            "yellow": ["#341a00", "#4b2900", "#693e00", "#845306", "#9e6a03", "#bb8009", "#d29922", "#e3b341", "#f2cc60", "#f8e3a1"],
            "orange": ["#3d1300", "#5a1e02", "#762d0a", "#9b4215", "#bd561d", "#db6d28", "#f0883e", "#ffa657", "#ffc680", "#ffdfb6"],
            "red": ["#292100", "#452f00", "#633e00", "#865401", "#a66900", "#c38000", "#d69a00", "#e6b716", "#ecd334", "#f0ec59"],
            "purple": ["#271052", "#3c1e70", "#553098", "#6e40c9", "#8957e5", "#a371f7", "#bc8cff", "#d2a8ff", "#e2c5ff", "#eddeff"],
            "pink": ["#42062a", "#5e103e", "#7d2457", "#9e3670", "#bf4b8a", "#db61a2", "#f778ba", "#ff9bce", "#ffbedd", "#ffdaec"]
          },
          "text": {
            "primary": "#c9d1d9",
            "secondary": "#8b949e",
            "tertiary": "#8b949e",
            "placeholder": "#484f58",
            "disabled": "#8b949e",
            "inverse": "#f0f6fc",
            "link": "#58a6ff",
            "danger": "#c38000",
            "success": "#42a0ff",
            "warning": "#d29922",
            "white": "#f0f6fc"
          },
          "icon": {
            "primary": "#c9d1d9",
            "secondary": "#8b949e",
            "tertiary": "#8b949e",
            "info": "#58a6ff",
            "danger": "#c38000",
            "success": "#42a0ff",
            "warning": "#d29922"
          },
          "border": {
            "primary": "#30363d",
            "secondary": "#21262d",
            "tertiary": "#30363d",
            "overlay": "#30363d",
            "inverse": "#f0f6fc",
            "info": "#1f6feb",
            "danger": "#a66900",
            "success": "#1d69e0",
            "warning": "#9e6a03",
            "default": "#30363d",
            "muted": "#21262d",
            "subtle": "rgba(240,246,252,0.1)"
          },
          "bg": {
            "canvas": "#0d1117",
            "canvasMobile": "rgba(0,0,0,0)",
            "canvasInverse": "#6e7681",
            "canvasInset": "#010409",
            "primary": "#0d1117",
            "secondary": "#161b22",
            "tertiary": "#161b22",
            "overlay": "#161b22",
            "backdrop": "rgba(1,4,9,0.8)",
            "info": "rgba(56,139,253,0.15)",
            "infoInverse": "#1f6feb",
            "danger": "rgba(195,128,0,0.15)",
            "dangerInverse": "#a66900",
            "success": "rgba(21,133,253,0.15)",
            "successInverse": "#1d69e0",
            "warning": "rgba(187,128,9,0.15)",
            "warningInverse": "#9e6a03"
          },
          "state": {
            "hover": {
              "primaryBg": "#1f6feb",
              "primaryBorder": "#1f6feb",
              "primaryText": "#f0f6fc",
              "primaryIcon": "#f0f6fc",
              "secondaryBg": "rgba(110,118,129,0.1)",
              "secondaryBorder": "rgba(110,118,129,0.1)"
            },
            "selected": {
              "primaryBg": "#1f6feb",
              "primaryBorder": "#1f6feb",
              "primaryText": "#f0f6fc",
              "primaryIcon": "#f0f6fc"
            },
            "focus": {
              "border": "#1f6feb"
            }
          },
          "fade": {
            "fg10": "rgba(240,246,252,0.1)",
            "fg15": "rgba(240,246,252,0.15)",
            "fg30": "rgba(240,246,252,0.3)",
            "fg50": "rgba(240,246,252,0.5)",
            "fg70": "rgba(240,246,252,0.7)",
            "fg85": "rgba(240,246,252,0.85)",
            "black10": "rgba(1,4,9,0.1)",
            "black15": "rgba(1,4,9,0.15)",
            "black30": "rgba(1,4,9,0.3)",
            "black50": "rgba(1,4,9,0.5)",
            "black70": "rgba(1,4,9,0.7)",
            "black85": "rgba(1,4,9,0.85)",
            "white10": "rgba(240,246,252,0.1)",
            "white15": "rgba(240,246,252,0.15)",
            "white30": "rgba(240,246,252,0.3)",
            "white50": "rgba(240,246,252,0.5)",
            "white70": "rgba(240,246,252,0.7)",
            "white85": "rgba(240,246,252,0.85)"
          },
          "alert": {
            "info": {
              "text": "#c9d1d9",
              "icon": "#58a6ff",
              "bg": "rgba(56,139,253,0.15)",
              "border": "rgba(56,139,253,0.4)"
            },
            "warn": {
              "text": "#c9d1d9",
              "icon": "#d29922",
              "bg": "rgba(187,128,9,0.15)",
              "border": "rgba(187,128,9,0.4)"
            },
            "error": {
              "text": "#c9d1d9",
              "icon": "#c38000",
              "bg": "rgba(195,128,0,0.15)",
              "border": "rgba(195,128,0,0.4)"
            },
            "success": {
              "text": "#c9d1d9",
              "icon": "#42a0ff",
              "bg": "rgba(21,133,253,0.15)",
              "border": "rgba(21,133,253,0.4)"
            }
          },
          "autocomplete": {
            "rowBorder": "#21262d"
          },
          "blankslate": {
            "icon": "#8b949e"
          },
          "counter": {
            "text": "#c9d1d9",
            "bg": "rgba(110,118,129,0.4)",
            "primary": {
              "text": "#f0f6fc",
              "bg": "#6e7681"
            },
            "secondary": {
              "text": "#8b949e",
              "bg": "rgba(110,118,129,0.1)"
            }
          },
          "box": {
            "blueBorder": "rgba(56,139,253,0.4)",
            "rowYellowBg": "rgba(187,128,9,0.15)",
            "rowBlueBg": "rgba(56,139,253,0.15)",
            "headerBlueBg": "rgba(56,139,253,0.15)",
            "headerBlueBorder": "rgba(56,139,253,0.4)",
            "borderInfo": "rgba(56,139,253,0.4)",
            "bgInfo": "rgba(56,139,253,0.15)",
            "borderWarning": "rgba(187,128,9,0.4)",
            "bgWarning": "rgba(187,128,9,0.15)"
          },
          "branchName": {
            "text": "#8b949e",
            "icon": "#8b949e",
            "bg": "rgba(56,139,253,0.15)",
            "link": {
              "text": "#58a6ff",
              "icon": "#58a6ff",
              "bg": "rgba(56,139,253,0.15)"
            }
          },
          "markdown": {
            "codeBg": "rgba(110,118,129,0.4)",
            "frameBorder": "#30363d",
            "blockquoteBorder": "#30363d",
            "tableBorder": "#30363d",
            "tableTrBorder": "#21262d"
          },
          "filterItem": {
            "barBg": "rgba(110,118,129,0.1)"
          },
          "hiddenTextExpander": {
            "bg": "rgba(110,118,129,0.4)",
            "bgHover": "rgba(56,139,253,0.4)"
          },
          "dragAndDrop": {
            "border": "#30363d"
          },
          "uploadEnabled": {
            "border": "#30363d",
            "borderFocused": "#1f6feb"
          },
          "previewableCommentForm": {
            "border": "#30363d"
          },
          "verifiedBadge": {
            "text": "#42a0ff",
            "bg": "#0d1117",
            "border": "#30363d"
          },
          "socialCount": {
            "bg": "#0d1117"
          },
          "tooltip": {
            "text": "#f0f6fc",
            "bg": "#6e7681"
          },
          "filesExplorerIcon": "#58a6ff",
          "hlAuthorBg": "rgba(56,139,253,0.15)",
          "hlAuthorBorder": "rgba(56,139,253,0.4)",
          "logoSubdued": "rgba(110,118,129,0.4)",
          "discussionBorder": "rgba(21,133,253,0.4)",
          "discussionBgSuccess": "#1d69e0",
          "actionsWorkflowTableStickyBg": "rgba(13,17,23,0.95)",
          "repoLanguageColorBorder": "rgba(240,246,252,0.2)",
          "codeSelectionBg": "rgba(56,139,253,0.4)",
          "highlight": {
            "text": "#c9d1d9",
            "bg": "rgba(187,128,9,0.15)"
          },
          "blob": {
            "lineHighlightBg": "rgba(187,128,9,0.15)",
            "lineHighlightBorder": "rgba(187,128,9,0.4)"
          },
          "topicTag": {
            "text": "#58a6ff",
            "bg": "rgba(56,139,253,0.15)",
            "hoverBg": "#1f6feb",
            "activeBg": "rgba(56,139,253,0.15)",
            "border": "rgba(0,0,0,0)"
          },
          "footerInvertocat": {
            "octicon": "#484f58",
            "octiconHover": "#8b949e"
          },
          "label": {
            "border": "#30363d",
            "primary": {
              "text": "#c9d1d9",
              "border": "#6e7681"
            },
            "secondary": {
              "text": "#8b949e",
              "border": "#30363d"
            },
            "info": {
              "text": "#58a6ff",
              "border": "#1f6feb"
            },
            "success": {
              "text": "#42a0ff",
              "border": "#1d69e0"
            },
            "warning": {
              "text": "#d29922",
              "border": "#9e6a03"
            },
            "danger": {
              "text": "#c38000",
              "border": "#a66900"
            },
            "orange": {
              "text": "#db6d28",
              "border": "#bd561d"
            }
          },
          "input": {
            "bg": "#0d1117",
            "contrastBg": "#010409",
            "border": "#30363d",
            "disabledBorder": "#30363d",
            "warningBorder": "#9e6a03",
            "errorBorder": "#a66900",
            "tooltip": {
              "success": {
                "text": "#c9d1d9",
                "bg": "rgba(21,133,253,0.15)",
                "border": "rgba(21,133,253,0.4)"
              },
              "warning": {
                "text": "#c9d1d9",
                "bg": "rgba(187,128,9,0.15)",
                "border": "rgba(187,128,9,0.4)"
              },
              "error": {
                "text": "#c9d1d9",
                "bg": "rgba(195,128,0,0.15)",
                "border": "rgba(195,128,0,0.4)"
              }
            },
            "disabledBg": "rgba(110,118,129,0)"
          },
          "toast": {
            "text": "#c9d1d9",
            "bg": "#0d1117",
            "border": "#30363d",
            "icon": "#f0f6fc",
            "iconBg": "#1f6feb",
            "iconBorder": "rgba(0,0,0,0)",
            "success": {
              "text": "#c9d1d9",
              "border": "#30363d",
              "icon": "#f0f6fc",
              "iconBg": "#1d69e0",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "warning": {
              "text": "#c9d1d9",
              "border": "#30363d",
              "icon": "#c9d1d9",
              "iconBg": "#9e6a03",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "danger": {
              "text": "#c9d1d9",
              "border": "#30363d",
              "icon": "#f0f6fc",
              "iconBg": "#a66900",
              "iconBorder": "rgba(0,0,0,0)"
            },
            "loading": {
              "text": "#c9d1d9",
              "border": "#30363d",
              "icon": "#f0f6fc",
              "iconBg": "#6e7681",
              "iconBorder": "rgba(0,0,0,0)"
            }
          },
          "timeline": {
            "text": "#8b949e",
            "badgeSuccessBorder": "rgba(0,0,0,0)",
            "targetBadgeBorder": "#1f6feb",
            "targetBadgeShadow": "rgba(56,139,253,0.4)",
            "badgeBg": "#21262d"
          },
          "diffstat": {
            "neutralBg": "rgba(110,118,129,0.4)",
            "neutralBorder": "rgba(240,246,252,0.1)",
            "deletionBorder": "rgba(240,246,252,0.1)",
            "additionBorder": "rgba(240,246,252,0.1)",
            "deletionBg": "#a66900",
            "additionBg": "#42a0ff"
          },
          "diff": {
            "addition": {
              "text": "#c9d1d9",
              "bg": "rgba(21,133,253,0.15)",
              "border": "rgba(21,133,253,0.4)"
            },
            "deletion": {
              "text": "#c9d1d9",
              "bg": "rgba(195,128,0,0.15)",
              "border": "rgba(195,128,0,0.4)"
            },
            "change": {
              "text": "#d29922",
              "bg": "rgba(187,128,9,0.15)",
              "border": "rgba(187,128,9,0.4)"
            }
          },
          "mergeBox": {
            "successIconBg": "#1d69e0",
            "successIconText": "#f0f6fc",
            "successIconBorder": "rgba(0,0,0,0)",
            "successIndicatorBg": "#1d69e0",
            "successIndicatorBorder": "rgba(0,0,0,0)",
            "mergedIconBg": "#8957e5",
            "mergedIconText": "#f0f6fc",
            "mergedIconBorder": "rgba(0,0,0,0)",
            "mergedBoxBorder": "#8957e5",
            "neutralIconBg": "#6e7681",
            "neutralIconText": "#f0f6fc",
            "neutralIconBorder": "rgba(0,0,0,0)",
            "neutralIndicatorBg": "#6e7681",
            "neutralIndicatorBorder": "rgba(0,0,0,0)",
            "warningIconBg": "#9e6a03",
            "warningIconText": "#f0f6fc",
            "warningIconBorder": "rgba(0,0,0,0)",
            "warningBoxBorder": "#9e6a03",
            "warningMergeHighlight": "rgba(0,0,0,0)",
            "errorIconBg": "#a66900",
            "errorIconText": "#f0f6fc",
            "errorIconBorder": "rgba(0,0,0,0)",
            "errorIndicatorBg": "#a66900",
            "errorIndicatorBorder": "rgba(0,0,0,0)"
          },
          "underlinenav": {
            "border": "rgba(0,0,0,0)",
            "borderHover": "rgba(110,118,129,0.4)",
            "borderActive": "#F78166",
            "text": "#c9d1d9",
            "textHover": "#c9d1d9",
            "textActive": "#c9d1d9",
            "icon": "#484f58",
            "iconHover": "#484f58",
            "iconActive": "#c9d1d9",
            "counterText": "#c9d1d9",
            "counterBg": "rgba(110,118,129,0.4)"
          },
          "selectMenu": {
            "borderSecondary": "#21262d",
            "backdropBg": "rgba(1,4,9,0.8)",
            "backdropBorder": "#484f58",
            "tapHighlight": "rgba(48,54,61,0.5)",
            "tapFocusBg": "#0c2d6b"
          },
          "sidenav": {
            "borderActive": "#F78166",
            "selectedBg": "#21262d"
          },
          "menu": {
            "headingText": "#c9d1d9",
            "borderActive": "#F78166",
            "bgActive": "#161b22"
          },
          "project": {
            "cardBg": "#161b22",
            "headerBg": "#0d1117",
            "sidebarBg": "#161b22",
            "gradientIn": "#161b22",
            "gradientOut": "rgba(22,27,34,0)"
          },
          "prState": {
            "draft": {
              "text": "#f0f6fc",
              "bg": "#6e7681",
              "border": "rgba(0,0,0,0)"
            },
            "open": {
              "text": "#f0f6fc",
              "bg": "#1d69e0",
              "border": "rgba(0,0,0,0)"
            },
            "merged": {
              "text": "#f0f6fc",
              "bg": "#8957e5",
              "border": "rgba(0,0,0,0)"
            },
            "closed": {
              "text": "#f0f6fc",
              "bg": "#a66900",
              "border": "rgba(0,0,0,0)"
            }
          },
          "diffBlob": {
            "numText": "#484f58",
            "numHoverText": "#c9d1d9",
            "addition": {
              "numHoverText": "#c9d1d9",
              "numText": "#c9d1d9",
              "fg": "#c9d1d9",
              "numBg": "rgba(66,160,255,0.3)",
              "lineBg": "rgba(21,133,253,0.15)",
              "wordBg": "rgba(21,133,253,0.4)"
            },
            "deletion": {
              "numHoverText": "#c9d1d9",
              "numText": "#c9d1d9",
              "fg": "#c9d1d9",
              "numBg": "rgba(195,128,0,0.3)",
              "lineBg": "rgba(195,128,0,0.15)",
              "wordBg": "rgba(195,128,0,0.4)"
            },
            "hunk": {
              "text": "#8b949e",
              "numBg": "rgba(56,139,253,0.4)",
              "lineBg": "rgba(56,139,253,0.15)"
            },
            "emptyBlockBg": "rgba(110,118,129,0.1)",
            "selectedLineHighlightBg": "rgba(187,128,9,0.15)",
            "selectedLineHighlightBorder": "rgba(187,128,9,0.4)",
            "expander": {
              "hoverIcon": "#f0f6fc",
              "hoverBg": "#1f6feb",
              "icon": "#8b949e"
            },
            "commentButton": {
              "icon": "#f0f6fc",
              "bg": "#1f6feb",
              "gradientBg": "rgba(0,0,0,0)"
            }
          },
          "globalNav": {
            "logo": "#f0f6fc",
            "bg": "#161b22",
            "text": "#c9d1d9",
            "icon": "#c9d1d9",
            "inputBg": "#0d1117",
            "inputBorder": "#21262d",
            "inputIcon": "#21262d",
            "inputPlaceholder": "#484f58"
          },
          "introShelf": {
            "gradientLeft": "rgba(56,139,253,0.15)",
            "gradientRight": "rgba(21,133,253,0.15)",
            "gradientIn": "#0d1117",
            "gradientOut": "rgba(240,246,252,0)"
          },
          "canvasDefaultTransparent": "rgba(13,17,23,0)",
          "marketingIcon": {
            "primary": "#79c0ff",
            "secondary": "#1f6feb"
          },
          "searchKeyword": {
            "hl": "rgba(210,153,34,0.4)"
          },
          "prettylights": {
            "syntax": {
              "comment": "#8b949e",
              "constant": "#79c0ff",
              "entity": "#d2a8ff",
              "storageModifierImport": "#c9d1d9",
              "entityTag": "#83d4ff",
              "keyword": "#d69a00",
              "string": "#a5d6ff",
              "variable": "#ffa657",
              "brackethighlighterUnmatched": "#c38000",
              "invalidIllegalText": "#f0f6fc",
              "invalidIllegalBg": "#633e00",
              "carriageReturnText": "#f0f6fc",
              "carriageReturnBg": "#865401",
              "stringRegexp": "#83d4ff",
              "markupList": "#f2cc60",
              "markupHeading": "#1f6feb",
              "markupItalic": "#c9d1d9",
              "markupBold": "#c9d1d9",
              "markupDeletedText": "#f0ec59",
              "markupDeletedBg": "#452f00",
              "markupInsertedText": "#a0e8ff",
              "markupInsertedBg": "#0a2861",
              "markupChangedText": "#ffdfb6",
              "markupChangedBg": "#5a1e02",
              "markupIgnoredText": "#c9d1d9",
              "markupIgnoredBg": "#1158c7",
              "metaDiffRange": "#d2a8ff",
              "brackethighlighterAngle": "#8b949e",
              "sublimelinterGutterMark": "#484f58",
              "constantOtherReferenceLink": "#a5d6ff"
            }
          },
          "codemirror": {
            "text": "#c9d1d9",
            "bg": "#0d1117",
            "guttersBg": "#0d1117",
            "guttermarkerText": "#0d1117",
            "guttermarkerSubtleText": "#484f58",
            "linenumberText": "#8b949e",
            "cursor": "#c9d1d9",
            "selectionBg": "rgba(56,139,253,0.4)",
            "activelineBg": "rgba(110,118,129,0.1)",
            "matchingbracketText": "#c9d1d9",
            "linesBg": "#0d1117",
            "syntax": {
              "comment": "#8b949e",
              "constant": "#79c0ff",
              "entity": "#d2a8ff",
              "keyword": "#d69a00",
              "storage": "#d69a00",
              "string": "#a5d6ff",
              "support": "#79c0ff",
              "variable": "#ffa657"
            }
          },
          "checks": {
            "bg": "#010409",
            "textPrimary": "#c9d1d9",
            "textSecondary": "#8b949e",
            "textLink": "#58a6ff",
            "btnIcon": "#8b949e",
            "btnHoverIcon": "#c9d1d9",
            "btnHoverBg": "rgba(110,118,129,0.1)",
            "inputText": "#8b949e",
            "inputPlaceholderText": "#484f58",
            "inputFocusText": "#c9d1d9",
            "inputBg": "#161b22",
            "donutError": "#c38000",
            "donutPending": "#d29922",
            "donutSuccess": "#1585fd",
            "donutNeutral": "#8b949e",
            "dropdownText": "#c9d1d9",
            "dropdownBg": "#161b22",
            "dropdownBorder": "#30363d",
            "dropdownShadow": "rgba(1,4,9,0.3)",
            "dropdownHoverText": "#c9d1d9",
            "dropdownHoverBg": "rgba(110,118,129,0.1)",
            "dropdownBtnHoverText": "#c9d1d9",
            "dropdownBtnHoverBg": "rgba(110,118,129,0.1)",
            "scrollbarThumbBg": "rgba(110,118,129,0.4)",
            "headerLabelText": "#8b949e",
            "headerLabelOpenText": "#c9d1d9",
            "headerBorder": "#21262d",
            "headerIcon": "#8b949e",
            "lineText": "#8b949e",
            "lineNumText": "#484f58",
            "lineTimestampText": "#484f58",
            "lineHoverBg": "rgba(110,118,129,0.1)",
            "lineSelectedBg": "rgba(56,139,253,0.15)",
            "lineSelectedNumText": "#58a6ff",
            "lineDtFmText": "#f0f6fc",
            "lineDtFmBg": "#9e6a03",
            "gateBg": "rgba(187,128,9,0.15)",
            "gateText": "#8b949e",
            "gateWaitingText": "#d29922",
            "stepHeaderOpenBg": "#161b22",
            "stepErrorText": "#c38000",
            "stepWarningText": "#d29922",
            "loglineText": "#8b949e",
            "loglineNumText": "#484f58",
            "loglineDebugText": "#a371f7",
            "loglineErrorText": "#8b949e",
            "loglineErrorNumText": "#484f58",
            "loglineErrorBg": "rgba(195,128,0,0.15)",
            "loglineWarningText": "#8b949e",
            "loglineWarningNumText": "#d29922",
            "loglineWarningBg": "rgba(187,128,9,0.15)",
            "loglineCommandText": "#58a6ff",
            "loglineSectionText": "#42a0ff",
            "ansi": {
              "black": "#0d1117",
              "blackBright": "#161b22",
              "white": "#b1bac4",
              "whiteBright": "#b1bac4",
              "gray": "#6e7681",
              "red": "#d69a00",
              "redBright": "#e6b716",
              "green": "#42a0ff",
              "greenBright": "#66baff",
              "yellow": "#d29922",
              "yellowBright": "#e3b341",
              "blue": "#58a6ff",
              "blueBright": "#79c0ff",
              "magenta": "#bc8cff",
              "magentaBright": "#d2a8ff",
              "cyan": "#76e3ea",
              "cyanBright": "#b3f0ff"
            }
          },
          "mktg": {
            "success": "rgba(25,119,239,1)",
            "info": "rgba(42,123,243,1)",
            "bgShadeGradient": {
              "top": "rgba(1,4,9,0.065)",
              "bottom": "rgba(1,4,9,0)"
            },
            "btn": {
              "bg": {
                "top": "hsla(228,82%,66%,1)",
                "bottom": "#4969ed"
              },
              "bgOverlay": {
                "top": "hsla(228,74%,59%,1)",
                "bottom": "#3355e0"
              },
              "text": "#f0f6fc",
              "primary": {
                "bg": {
                  "top": "hsla(137,56%,46%,1)",
                  "bottom": "#2ea44f"
                },
                "bgOverlay": {
                  "top": "hsla(134,60%,38%,1)",
                  "bottom": "#22863a"
                },
                "text": "#f0f6fc"
              },
              "enterprise": {
                "bg": {
                  "top": "hsla(249,100%,72%,1)",
                  "bottom": "#6f57ff"
                },
                "bgOverlay": {
                  "top": "hsla(248,65%,63%,1)",
                  "bottom": "#614eda"
                },
                "text": "#f0f6fc"
              },
              "outline": {
                "text": "#f0f6fc",
                "border": "rgba(240,246,252,0.3)",
                "hover": {
                  "text": "#f0f6fc",
                  "border": "rgba(240,246,252,0.5)"
                },
                "focus": {
                  "border": "#f0f6fc",
                  "borderInset": "rgba(240,246,252,0.5)"
                }
              },
              "dark": {
                "text": "#f0f6fc",
                "border": "rgba(240,246,252,0.3)",
                "hover": {
                  "text": "#f0f6fc",
                  "border": "rgba(240,246,252,0.5)"
                },
                "focus": {
                  "border": "#f0f6fc",
                  "borderInset": "rgba(240,246,252,0.5)"
                }
              }
            }
          },
          "avatar": {
            "bg": "rgba(240,246,252,0.1)",
            "border": "rgba(240,246,252,0.1)",
            "stackFade": "#30363d",
            "stackFadeMore": "#21262d"
          },
          "header": {
            "text": "rgba(240,246,252,0.7)",
            "bg": "#161b22",
            "logo": "#f0f6fc"
          },
          "headerSearch": {
            "bg": "#0d1117",
            "border": "#30363d"
          },
          "ansi": {
            "black": "#484f58",
            "blackBright": "#6e7681",
            "white": "#b1bac4",
            "whiteBright": "#f0f6fc",
            "gray": "#6e7681",
            "red": "#d69a00",
            "redBright": "#e6b716",
            "green": "#42a0ff",
            "greenBright": "#66baff",
            "yellow": "#d29922",
            "yellowBright": "#e3b341",
            "blue": "#58a6ff",
            "blueBright": "#79c0ff",
            "magenta": "#bc8cff",
            "magentaBright": "#d2a8ff",
            "cyan": "#39c5cf",
            "cyanBright": "#56d4dd"
          },
          "btn": {
            "text": "#c9d1d9",
            "bg": "#21262d",
            "border": "rgba(240,246,252,0.1)",
            "hoverBg": "#30363d",
            "hoverBorder": "#8b949e",
            "activeBg": "hsla(212,12%,18%,1)",
            "activeBorder": "#6e7681",
            "selectedBg": "#161b22",
            "focusBg": "#21262d",
            "focusBorder": "#8b949e",
            "counterBg": "#30363d",
            "primary": {
              "text": "#ffffff",
              "bg": "#1d69e0",
              "border": "rgba(240,246,252,0.1)",
              "hoverBg": "#1585fd",
              "hoverBorder": "rgba(240,246,252,0.1)",
              "selectedBg": "#1d69e0",
              "disabledText": "rgba(240,246,252,0.5)",
              "disabledBg": "rgba(29,105,224,0.6)",
              "disabledBorder": "rgba(240,246,252,0.1)",
              "focusBg": "#1d69e0",
              "focusBorder": "rgba(240,246,252,0.1)",
              "icon": "#f0f6fc",
              "counterBg": "rgba(240,246,252,0.2)"
            },
            "outline": {
              "text": "#58a6ff",
              "hoverText": "#58a6ff",
              "hoverBg": "#30363d",
              "hoverBorder": "rgba(240,246,252,0.1)",
              "hoverCounterBg": "rgba(240,246,252,0.2)",
              "selectedText": "#f0f6fc",
              "selectedBg": "#0d419d",
              "selectedBorder": "rgba(240,246,252,0.1)",
              "disabledText": "rgba(88,166,255,0.5)",
              "disabledBg": "#0d1117",
              "disabledCounterBg": "rgba(31,111,235,0.05)",
              "focusBorder": "rgba(240,246,252,0.1)",
              "counterBg": "rgba(31,111,235,0.1)"
            },
            "danger": {
              "text": "#c38000",
              "hoverText": "#f0f6fc",
              "hoverBg": "#a66900",
              "hoverBorder": "#c38000",
              "hoverIcon": "#f0f6fc",
              "hoverCounterBg": "rgba(255,255,255,0.2)",
              "selectedText": "#ffffff",
              "selectedBg": "#865401",
              "selectedBorder": "#d69a00",
              "disabledText": "rgba(195,128,0,0.5)",
              "disabledBg": "#0d1117",
              "disabledCounterBg": "rgba(166,105,0,0.05)",
              "focusBorder": "#c38000",
              "counterBg": "rgba(166,105,0,0.1)",
              "icon": "#c38000"
            }
          },
          "fg": {
            "default": "#c9d1d9",
            "muted": "#8b949e",
            "subtle": "#484f58",
            "onEmphasis": "#f0f6fc"
          },
          "canvas": {
            "default": "#0d1117",
            "overlay": "#161b22",
            "inset": "#010409",
            "subtle": "#161b22"
          },
          "neutral": {
            "emphasisPlus": "#6e7681",
            "emphasis": "#6e7681",
            "muted": "rgba(110,118,129,0.4)",
            "subtle": "rgba(110,118,129,0.1)"
          },
          "accent": {
            "fg": "#58a6ff",
            "emphasis": "#1f6feb",
            "muted": "rgba(56,139,253,0.4)",
            "subtle": "rgba(56,139,253,0.15)"
          },
          "success": {
            "fg": "#42a0ff",
            "emphasis": "#1d69e0",
            "muted": "rgba(21,133,253,0.4)",
            "subtle": "rgba(21,133,253,0.15)"
          },
          "attention": {
            "fg": "#d29922",
            "emphasis": "#9e6a03",
            "muted": "rgba(187,128,9,0.4)",
            "subtle": "rgba(187,128,9,0.15)"
          },
          "severe": {
            "fg": "#db6d28",
            "emphasis": "#bd561d",
            "muted": "rgba(219,109,40,0.4)",
            "subtle": "rgba(219,109,40,0.15)"
          },
          "danger": {
            "fg": "#c38000",
            "emphasis": "#a66900",
            "muted": "rgba(195,128,0,0.4)",
            "subtle": "rgba(195,128,0,0.15)"
          },
          "done": {
            "fg": "#a371f7",
            "emphasis": "#8957e5",
            "muted": "rgba(163,113,247,0.4)",
            "subtle": "rgba(163,113,247,0.15)"
          },
          "sponsors": {
            "fg": "#db61a2",
            "emphasis": "#bf4b8a",
            "muted": "rgba(219,97,162,0.4)",
            "subtle": "rgba(219,97,162,0.15)"
          },
          "primer": {
            "canvas": {
              "backdrop": "rgba(1,4,9,0.8)",
              "sticky": "rgba(13,17,23,0.95)"
            },
            "border": {
              "active": "#F78166",
              "contrast": "rgba(240,246,252,0.2)"
            }
          }
        },
        "shadows": {
          "shadow": {
            "highlight": "0 0 transparent",
            "inset": "0 0 transparent",
            "small": "0 0 transparent",
            "medium": "0 3px 6px #010409",
            "large": "0 8px 24px #010409",
            "extraLarge": "0 12px 48px #010409"
          },
          "state": {
            "focus": {
              "shadow": "0 0 0 3px #0c2d6b"
            }
          },
          "autocomplete": {
            "shadow": "0 3px 6px #010409"
          },
          "dropdown": {
            "shadow": "0 8px 24px #010409"
          },
          "input": {
            "shadow": "0 0 transparent"
          },
          "toast": {
            "shadow": "0 8px 24px #010409"
          },
          "selectMenu": {
            "shadow": "0 8px 24px #010409"
          },
          "checks": {
            "inputShadow": "0 0 0 1px (obj) => get_1.default(obj, path)"
          },
          "avatar": {
            "childShadow": "-2px -2px 0 #0d1117"
          },
          "overlay": {
            "shadow": "0 0 0 1px #30363d, 0 16px 32px rgba(1,4,9,0.85)"
          },
          "btn": {
            "shadow": "0 0 transparent",
            "insetShadow": "0 0 transparent",
            "focusShadow": "0 0 0 3px rgba(139,148,158,0.3)",
            "shadowActive": "inset 0 0.15em 0.3em rgba(1,4,9,0.15)",
            "shadowInputFocus": "0 0 0 0.2em rgba(31,111,235,0.3)",
            "primary": {
              "shadow": "0 0 transparent",
              "insetShadow": "0 0 transparent",
              "selectedShadow": "0 0 transparent",
              "focusShadow": "0 0 0 3px rgba(46,164,79,0.4)"
            },
            "outline": {
              "hoverShadow": "0 1px 0 rgba(1,4,9,0.1)",
              "hoverInsetShadow": "inset 0 1px 0 rgba(240,246,252,0.03)",
              "selectedShadow": "0 0 transparent",
              "focusShadow": "0 0 0 3px rgba(17,88,199,0.4)"
            },
            "danger": {
              "hoverShadow": "0 0 transparent",
              "hoverInsetShadow": "0 0 transparent",
              "selectedShadow": "0 0 transparent",
              "focusShadow": "0 0 0 3px rgba(195,128,0,0.4)"
            }
          },
          "primer": {
            "shadow": {
              "highlight": "0 0 transparent",
              "inset": "0 0 transparent",
              "focus": "0 0 0 3px #0c2d6b"
            }
          }
        }
      }
    }
  }
};

var merge = function merge(a, b) {
  var result = objectAssign({}, a, b);

  for (var key in a) {
    var _assign;

    if (!a[key] || typeof b[key] !== 'object') continue;
    objectAssign(result, (_assign = {}, _assign[key] = objectAssign(a[key], b[key]), _assign));
  }

  return result;
}; // sort object-value responsive styles

var sort = function sort(obj) {
  var next = {};
  Object.keys(obj).sort(function (a, b) {
    return a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: 'base'
    });
  }).forEach(function (key) {
    next[key] = obj[key];
  });
  return next;
};

var defaults = {
  breakpoints: [40, 52, 64].map(function (n) {
    return n + 'em';
  })
};

var createMediaQuery = function createMediaQuery(n) {
  return "@media screen and (min-width: " + n + ")";
};

var getValue = function getValue(n, scale) {
  return get(scale, n, n);
};

var get = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var createParser = function createParser(config) {
  var cache = {};

  var parse = function parse(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;

    for (var key in props) {
      if (!config[key]) continue;
      var sx = config[key];
      var raw = props[key];
      var scale = get(props.theme, sx.scale, sx.defaults);

      if (typeof raw === 'object') {
        cache.breakpoints = !isCacheDisabled && cache.breakpoints || get(props.theme, 'breakpoints', defaults.breakpoints);

        if (Array.isArray(raw)) {
          cache.media = !isCacheDisabled && cache.media || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }

        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          shouldSort = true;
        }

        continue;
      }

      objectAssign(styles, sx(raw, scale, props));
    } // sort object-based responsive styles


    if (shouldSort) {
      styles = sort(styles);
    }

    return styles;
  };

  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;
  var keys = Object.keys(config).filter(function (k) {
    return k !== 'config';
  });

  if (keys.length > 1) {
    keys.forEach(function (key) {
      var _createParser;

      parse[key] = createParser((_createParser = {}, _createParser[key] = config[key], _createParser));
    });
  }

  return parse;
};

var parseResponsiveStyle = function parseResponsiveStyle(mediaQueries, sx, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function (value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale, _props);

    if (!media) {
      objectAssign(styles, style);
    } else {
      var _assign2;

      objectAssign(styles, (_assign2 = {}, _assign2[media] = objectAssign({}, styles[media], style), _assign2));
    }
  });
  return styles;
};

var parseResponsiveObject = function parseResponsiveObject(breakpoints, sx, scale, raw, _props) {
  var styles = {};

  for (var key in raw) {
    var breakpoint = breakpoints[key];
    var value = raw[key];
    var style = sx(value, scale, _props);

    if (!breakpoint) {
      objectAssign(styles, style);
    } else {
      var _assign3;

      var media = createMediaQuery(breakpoint);
      objectAssign(styles, (_assign3 = {}, _assign3[media] = objectAssign({}, styles[media], style), _assign3));
    }
  }

  return styles;
};

var createStyleFunction = function createStyleFunction(_ref) {
  var properties = _ref.properties,
      property = _ref.property,
      scale = _ref.scale,
      _ref$transform = _ref.transform,
      transform = _ref$transform === void 0 ? getValue : _ref$transform,
      defaultScale = _ref.defaultScale;
  properties = properties || [property];

  var sx = function sx(value, scale, _props) {
    var result = {};
    var n = transform(value, scale, _props);
    if (n === null) return;
    properties.forEach(function (prop) {
      result[prop] = n;
    });
    return result;
  };

  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
}; // new v5 API

var system = function system(args) {
  if (args === void 0) {
    args = {};
  }

  var config = {};
  Object.keys(args).forEach(function (key) {
    var conf = args[key];

    if (conf === true) {
      // shortcut definition
      config[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }

    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }

    config[key] = createStyleFunction(conf);
  });
  var parser = createParser(config);
  return parser;
};
var compose = function compose() {
  var config = {};

  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }

  parsers.forEach(function (parser) {
    if (!parser || !parser.config) return;
    objectAssign(config, parser.config);
  });
  var parser = createParser(config);
  return parser;
};

var themeGet = function themeGet(path, fallback) {
  if (fallback === void 0) {
    fallback = null;
  }

  return function (props) {
    return get(props.theme, path, fallback);
  };
};

var isNumber = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getWidth = function getWidth(n, scale) {
  return get(scale, n, !isNumber(n) || n > 1 ? n : n * 100 + '%');
};

var config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth
  },
  height: {
    property: 'height',
    scale: 'sizes'
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes'
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes'
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes'
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes'
  },
  size: {
    properties: ['width', 'height'],
    scale: 'sizes'
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true
};
var layout = system(config);

var config$1 = {
  color: {
    property: 'color',
    scale: 'colors'
  },
  backgroundColor: {
    property: 'backgroundColor',
    scale: 'colors'
  },
  opacity: true
};
config$1.bg = config$1.backgroundColor;
var color = system(config$1);

var defaults$1 = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config$2 = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults$1.fontSizes
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
};
var typography = system(config$2);

var config$3 = {
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  // item
  flex: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: true
};
var flexbox = system(config$3);

var defaults$2 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config$4 = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults$2.space
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults$2.space
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults$2.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = system(config$4);

var config$5 = {
  border: {
    property: 'border',
    scale: 'borders'
  },
  borderWidth: {
    property: 'borderWidth',
    scale: 'borderWidths'
  },
  borderStyle: {
    property: 'borderStyle',
    scale: 'borderStyles'
  },
  borderColor: {
    property: 'borderColor',
    scale: 'colors'
  },
  borderRadius: {
    property: 'borderRadius',
    scale: 'radii'
  },
  borderTop: {
    property: 'borderTop',
    scale: 'borders'
  },
  borderTopLeftRadius: {
    property: 'borderTopLeftRadius',
    scale: 'radii'
  },
  borderTopRightRadius: {
    property: 'borderTopRightRadius',
    scale: 'radii'
  },
  borderRight: {
    property: 'borderRight',
    scale: 'borders'
  },
  borderBottom: {
    property: 'borderBottom',
    scale: 'borders'
  },
  borderBottomLeftRadius: {
    property: 'borderBottomLeftRadius',
    scale: 'radii'
  },
  borderBottomRightRadius: {
    property: 'borderBottomRightRadius',
    scale: 'radii'
  },
  borderLeft: {
    property: 'borderLeft',
    scale: 'borders'
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: 'borders'
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: 'borders'
  }
};
config$5.borderTopWidth = {
  property: 'borderTopWidth',
  scale: 'borderWidths'
};
config$5.borderTopColor = {
  property: 'borderTopColor',
  scale: 'colors'
};
config$5.borderTopStyle = {
  property: 'borderTopStyle',
  scale: 'borderStyles'
};
config$5.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: 'radii'
};
config$5.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: 'radii'
};
config$5.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: 'borderWidths'
};
config$5.borderBottomColor = {
  property: 'borderBottomColor',
  scale: 'colors'
};
config$5.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: 'borderStyles'
};
config$5.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: 'radii'
};
config$5.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: 'radii'
};
config$5.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: 'borderWidths'
};
config$5.borderLeftColor = {
  property: 'borderLeftColor',
  scale: 'colors'
};
config$5.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: 'borderStyles'
};
config$5.borderRightWidth = {
  property: 'borderRightWidth',
  scale: 'borderWidths'
};
config$5.borderRightColor = {
  property: 'borderRightColor',
  scale: 'colors'
};
config$5.borderRightStyle = {
  property: 'borderRightStyle',
  scale: 'borderStyles'
};
var border = system(config$5);

var config$6 = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config$6.bgImage = config$6.backgroundImage;
config$6.bgSize = config$6.backgroundSize;
config$6.bgPosition = config$6.backgroundPosition;
config$6.bgRepeat = config$6.backgroundRepeat;
var background = system(config$6);

var defaults$3 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config$7 = {
  position: true,
  zIndex: {
    property: 'zIndex',
    scale: 'zIndices'
  },
  top: {
    property: 'top',
    scale: 'space',
    defaultScale: defaults$3.space
  },
  right: {
    property: 'right',
    scale: 'space',
    defaultScale: defaults$3.space
  },
  bottom: {
    property: 'bottom',
    scale: 'space',
    defaultScale: defaults$3.space
  },
  left: {
    property: 'left',
    scale: 'space',
    defaultScale: defaults$3.space
  }
};
var position = system(config$7);

var defaults$4 = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};

var isNumber$1 = function isNumber(n) {
  return typeof n === 'number' && !isNaN(n);
};

var getMargin = function getMargin(n, scale) {
  if (!isNumber$1(n)) {
    return get(scale, n, n);
  }

  var isNegative = n < 0;
  var absolute = Math.abs(n);
  var value = get(scale, absolute, absolute);

  if (!isNumber$1(value)) {
    return isNegative ? '-' + value : value;
  }

  return value * (isNegative ? -1 : 1);
};

var configs = {};
configs.margin = {
  margin: {
    property: 'margin',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginTop: {
    property: 'marginTop',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginRight: {
    property: 'marginRight',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginBottom: {
    property: 'marginBottom',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginLeft: {
    property: 'marginLeft',
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginX: {
    properties: ['marginLeft', 'marginRight'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  },
  marginY: {
    properties: ['marginTop', 'marginBottom'],
    scale: 'space',
    transform: getMargin,
    defaultScale: defaults$4.space
  }
};
configs.margin.m = configs.margin.margin;
configs.margin.mt = configs.margin.marginTop;
configs.margin.mr = configs.margin.marginRight;
configs.margin.mb = configs.margin.marginBottom;
configs.margin.ml = configs.margin.marginLeft;
configs.margin.mx = configs.margin.marginX;
configs.margin.my = configs.margin.marginY;
configs.padding = {
  padding: {
    property: 'padding',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingTop: {
    property: 'paddingTop',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingRight: {
    property: 'paddingRight',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingBottom: {
    property: 'paddingBottom',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingLeft: {
    property: 'paddingLeft',
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingX: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
    defaultScale: defaults$4.space
  },
  paddingY: {
    properties: ['paddingTop', 'paddingBottom'],
    scale: 'space',
    defaultScale: defaults$4.space
  }
};
configs.padding.p = configs.padding.padding;
configs.padding.pt = configs.padding.paddingTop;
configs.padding.pr = configs.padding.paddingRight;
configs.padding.pb = configs.padding.paddingBottom;
configs.padding.pl = configs.padding.paddingLeft;
configs.padding.px = configs.padding.paddingX;
configs.padding.py = configs.padding.paddingY;
var margin = system(configs.margin);
var padding = system(configs.padding);
var space = compose(margin, padding);

var shadow = system({
  boxShadow: {
    property: 'boxShadow',
    scale: 'shadows'
  },
  textShadow: {
    property: 'textShadow',
    scale: 'shadows'
  }
});

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// based on https://github.com/developit/dlv
var get$1 = function get(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];

  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }

  return obj === undef ? def : obj;
};
var defaultBreakpoints = [40, 52, 64].map(function (n) {
  return n + 'em';
});
var defaultTheme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var aliases = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY'
};
var multiples = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
  size: ['width', 'height']
};
var scales = {
  color: 'colors',
  backgroundColor: 'colors',
  borderColor: 'colors',
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  gap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  outlineColor: 'colors',
  boxShadow: 'shadows',
  textShadow: 'shadows',
  zIndex: 'zIndices',
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  flexBasis: 'sizes',
  size: 'sizes',
  // svg
  fill: 'colors',
  stroke: 'colors'
};

var positiveOrNegative = function positiveOrNegative(scale, value) {
  if (typeof value !== 'number' || value >= 0) {
    return get$1(scale, value, value);
  }

  var absolute = Math.abs(value);
  var n = get$1(scale, absolute, absolute);
  if (typeof n === 'string') return '-' + n;
  return n * -1;
};

var transforms = ['margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'top', 'bottom', 'left', 'right'].reduce(function (acc, curr) {
  var _extends2;

  return _extends({}, acc, (_extends2 = {}, _extends2[curr] = positiveOrNegative, _extends2));
}, {});
var responsive = function responsive(styles) {
  return function (theme) {
    var next = {};
    var breakpoints = get$1(theme, 'breakpoints', defaultBreakpoints);
    var mediaQueries = [null].concat(breakpoints.map(function (n) {
      return "@media screen and (min-width: " + n + ")";
    }));

    for (var key in styles) {
      var value = typeof styles[key] === 'function' ? styles[key](theme) : styles[key];
      if (value == null) continue;

      if (!Array.isArray(value)) {
        next[key] = value;
        continue;
      }

      for (var i = 0; i < value.slice(0, mediaQueries.length).length; i++) {
        var media = mediaQueries[i];

        if (!media) {
          next[key] = value[i];
          continue;
        }

        next[media] = next[media] || {};
        if (value[i] == null) continue;
        next[media][key] = value[i];
      }
    }

    return next;
  };
};
var css = function css(args) {
  return function (props) {
    if (props === void 0) {
      props = {};
    }

    var theme = _extends({}, defaultTheme, {}, props.theme || props);

    var result = {};
    var obj = typeof args === 'function' ? args(theme) : args;
    var styles = responsive(obj)(theme);

    for (var key in styles) {
      var x = styles[key];
      var val = typeof x === 'function' ? x(theme) : x;

      if (key === 'variant') {
        var variant = css(get$1(theme, val))(theme);
        result = _extends({}, result, {}, variant);
        continue;
      }

      if (val && typeof val === 'object') {
        result[key] = css(val)(theme);
        continue;
      }

      var prop = get$1(aliases, key, key);
      var scaleName = get$1(scales, prop);
      var scale = get$1(theme, scaleName, get$1(theme, prop, {}));
      var transform = get$1(transforms, prop, get$1);
      var value = transform(scale, val, val);

      if (multiples[prop]) {
        var dirs = multiples[prop];

        for (var i = 0; i < dirs.length; i++) {
          result[dirs[i]] = value;
        }
      } else {
        result[prop] = value;
      }
    }

    return result;
  };
};

var variant = function variant(_ref) {
  var _config;

  var scale = _ref.scale,
      _ref$prop = _ref.prop,
      prop = _ref$prop === void 0 ? 'variant' : _ref$prop,
      _ref$variants = _ref.variants,
      variants = _ref$variants === void 0 ? {} : _ref$variants,
      key = _ref.key;
  var sx;

  if (Object.keys(variants).length) {
    sx = function sx(value, scale, props) {
      return css(get(scale, value, null))(props.theme);
    };
  } else {
    sx = function sx(value, scale) {
      return get(scale, value, null);
    };
  }

  sx.scale = scale || key;
  sx.defaults = variants;
  var config = (_config = {}, _config[prop] = sx, _config);
  var parser = createParser(config);
  return parser;
};
var buttonStyle = variant({
  key: 'buttons'
});
var textStyle = variant({
  key: 'textStyles',
  prop: 'textStyle'
});
var colorStyle = variant({
  key: 'colorStyles',
  prop: 'colors'
});

var width = layout.width,
    height = layout.height,
    minWidth = layout.minWidth,
    minHeight = layout.minHeight,
    maxWidth = layout.maxWidth,
    maxHeight = layout.maxHeight,
    size = layout.size,
    verticalAlign = layout.verticalAlign,
    display = layout.display,
    overflow = layout.overflow,
    overflowX = layout.overflowX,
    overflowY = layout.overflowY;
var opacity = color.opacity;
var fontSize = typography.fontSize,
    fontFamily = typography.fontFamily,
    fontWeight = typography.fontWeight,
    lineHeight = typography.lineHeight,
    textAlign = typography.textAlign,
    fontStyle = typography.fontStyle,
    letterSpacing = typography.letterSpacing;
var alignItems = flexbox.alignItems,
    alignContent = flexbox.alignContent,
    justifyItems = flexbox.justifyItems,
    justifyContent = flexbox.justifyContent,
    flexWrap = flexbox.flexWrap,
    flexDirection = flexbox.flexDirection,
    flex = flexbox.flex,
    flexGrow = flexbox.flexGrow,
    flexShrink = flexbox.flexShrink,
    flexBasis = flexbox.flexBasis,
    justifySelf = flexbox.justifySelf,
    alignSelf = flexbox.alignSelf,
    order = flexbox.order;
var gridGap = grid.gridGap,
    gridColumnGap = grid.gridColumnGap,
    gridRowGap = grid.gridRowGap,
    gridColumn = grid.gridColumn,
    gridRow = grid.gridRow,
    gridAutoFlow = grid.gridAutoFlow,
    gridAutoColumns = grid.gridAutoColumns,
    gridAutoRows = grid.gridAutoRows,
    gridTemplateColumns = grid.gridTemplateColumns,
    gridTemplateRows = grid.gridTemplateRows,
    gridTemplateAreas = grid.gridTemplateAreas,
    gridArea = grid.gridArea;
var borderWidth = border.borderWidth,
    borderStyle = border.borderStyle,
    borderColor = border.borderColor,
    borderTop = border.borderTop,
    borderRight = border.borderRight,
    borderBottom = border.borderBottom,
    borderLeft = border.borderLeft,
    borderRadius = border.borderRadius;
var backgroundImage = background.backgroundImage,
    backgroundSize = background.backgroundSize,
    backgroundPosition = background.backgroundPosition,
    backgroundRepeat = background.backgroundRepeat;
var zIndex = position.zIndex,
    top = position.top,
    right = position.right,
    bottom = position.bottom,
    left = position.left;

var style = function style(_ref) {
  var prop = _ref.prop,
      cssProperty = _ref.cssProperty,
      alias = _ref.alias,
      key = _ref.key,
      transformValue = _ref.transformValue,
      scale = _ref.scale,
      properties = _ref.properties;
  var config = {};
  config[prop] = createStyleFunction({
    properties: properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue
  });
  if (alias) config[alias] = config[prop];
  var parse = createParser(config);
  return parse;
};

var styledSystem = /*#__PURE__*/Object.freeze({
  __proto__: null,
  width: width,
  height: height,
  minWidth: minWidth,
  minHeight: minHeight,
  maxWidth: maxWidth,
  maxHeight: maxHeight,
  size: size,
  verticalAlign: verticalAlign,
  display: display,
  overflow: overflow,
  overflowX: overflowX,
  overflowY: overflowY,
  opacity: opacity,
  fontSize: fontSize,
  fontFamily: fontFamily,
  fontWeight: fontWeight,
  lineHeight: lineHeight,
  textAlign: textAlign,
  fontStyle: fontStyle,
  letterSpacing: letterSpacing,
  alignItems: alignItems,
  alignContent: alignContent,
  justifyItems: justifyItems,
  justifyContent: justifyContent,
  flexWrap: flexWrap,
  flexDirection: flexDirection,
  flex: flex,
  flexGrow: flexGrow,
  flexShrink: flexShrink,
  flexBasis: flexBasis,
  justifySelf: justifySelf,
  alignSelf: alignSelf,
  order: order,
  gridGap: gridGap,
  gridColumnGap: gridColumnGap,
  gridRowGap: gridRowGap,
  gridColumn: gridColumn,
  gridRow: gridRow,
  gridAutoFlow: gridAutoFlow,
  gridAutoColumns: gridAutoColumns,
  gridAutoRows: gridAutoRows,
  gridTemplateColumns: gridTemplateColumns,
  gridTemplateRows: gridTemplateRows,
  gridTemplateAreas: gridTemplateAreas,
  gridArea: gridArea,
  borderWidth: borderWidth,
  borderStyle: borderStyle,
  borderColor: borderColor,
  borderTop: borderTop,
  borderRight: borderRight,
  borderBottom: borderBottom,
  borderLeft: borderLeft,
  borderRadius: borderRadius,
  backgroundImage: backgroundImage,
  backgroundSize: backgroundSize,
  backgroundPosition: backgroundPosition,
  backgroundRepeat: backgroundRepeat,
  zIndex: zIndex,
  top: top,
  right: right,
  bottom: bottom,
  left: left,
  style: style,
  get: get,
  createParser: createParser,
  createStyleFunction: createStyleFunction,
  compose: compose,
  system: system,
  margin: margin,
  padding: padding,
  space: space,
  color: color,
  layout: layout,
  typography: typography,
  flexbox: flexbox,
  border: border,
  background: background,
  position: position,
  grid: grid,
  shadow: shadow,
  boxShadow: shadow,
  textShadow: shadow,
  variant: variant,
  buttonStyle: buttonStyle,
  textStyle: textStyle,
  colorStyle: colorStyle,
  borders: border
});

const {
  get: getKey,
  compose: compose$1,
  system: system$1
} = styledSystem;
const get$2 = key => themeGet(key, getKey(themePreval.theme, key)); // Common props

const COMMON = compose$1(space, color, display);
// Typography props
const whiteSpace = system$1({
  whiteSpace: {
    property: 'whiteSpace' // cssProperty: 'whiteSpace',

  }
});
const TYPOGRAPHY = compose$1(typography, whiteSpace);
// Border props
const BORDER = compose$1(border, shadow);
// Layout props
const LAYOUT = layout;

/* SNOWPACK PROCESS POLYFILL (based on https://github.com/calvinmetcalf/node-process-es6) */
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== 'undefined') {
    globalContext = window;
} else if (typeof self !== 'undefined') {
    globalContext = self;
} else {
    globalContext = {};
}
if (typeof globalContext.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
function nextTick(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config$8 = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = globalContext.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: {"NODE_ENV":"production"},
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config$8,
  uptime: uptime
};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = memoize(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

var hoistNonReactStatics_cjs = hoistNonReactStatics;

function v$1(){return (v$1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e}).apply(this,arguments)}var g$1=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},S=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!reactIs.typeOf(t)},w$1=Object.freeze([]),E=Object.freeze({});function b$1(e){return "function"==typeof e}function _(e){return e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var A$1="undefined"!=typeof process&&(process.env.SC_ATTR)||"data-styled",I="undefined"!=typeof window&&"HTMLElement"in window,P=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==process.env.REACT_APP_SC_DISABLE_SPEEDY?process.env.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!==process.env.SC_DISABLE_SPEEDY&&""!==process.env.SC_DISABLE_SPEEDY?process.env.SC_DISABLE_SPEEDY:"production"!=="production");function j(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var T=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e;}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&j(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0;}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++);},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n);}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),k$1=new Map,x$1=new Map,V=1,B=function(e){if(k$1.has(e))return k$1.get(e);for(;x$1.has(V);)V++;var t=V++;return k$1.set(e,t),x$1.set(t,e),t},M=function(e){return x$1.get(e)},z$1=function(e,t){t>=V&&(V=t+1),k$1.set(e,t),x$1.set(t,e);},L="style["+A$1+'][data-styled-version="5.3.1"]',G=new RegExp("^"+A$1+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),F=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r);},Y=function(e,t){for(var n=(t.innerHTML||"").split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(G);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(z$1(u,c),F(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0;}else r.push(i);}}},q$1=function(){return "undefined"!=typeof window&&void 0!==window.__webpack_nonce__?window.__webpack_nonce__:null},H=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(A$1))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(A$1,"active"),r.setAttribute("data-styled-version","5.3.1");var i=q$1();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},$=function(){function e(e){var t=this.element=H(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}j(17);}(t),this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return !1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--;},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),W=function(){function e(e){var t=this.element=H(e);this.nodes=t.childNodes,this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return !1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--;},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0;}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--;},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),J=I,X={isServer:!I,useCSSOMInjection:!P},Z=function(){function e(e,t,n){void 0===e&&(e=E),void 0===t&&(t={}),this.options=v$1({},X,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&I&&J&&(J=!1,function(e){for(var t=document.querySelectorAll(L),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(A$1)&&(Y(e,o),o.parentNode&&o.parentNode.removeChild(o));}}(this));}e.registerId=function(e){return B(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v$1({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new U(o):r?new $(o):new W(o),new T(e)));var e,t,n,r,o;},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(B(e),this.names.has(e))this.names.get(e).add(t);else {var n=new Set;n.add(t),this.names.set(e,n);}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(B(e),n);},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear();},t.clearRules=function(e){this.getTag().clearGroup(B(e)),this.clearNames(e);},t.clearTag=function(){this.tag=void 0;},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=M(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(i&&a&&i.size){var c=A$1+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",");})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n';}}}return r}(this)},e}(),K=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function ee(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return (Q(t%52)+n).replace(K,"$1-$2")}var te=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ne=function(e){return te(5381,e)};function re(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(b$1(n)&&!N(n))return !1}return !0}var oe=ne("5.3.1"),se=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&re(e),this.componentId=t,this.baseHash=te(oe,t),this.baseStyle=n,Z.registerId(t);}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else {var s=Ne(this.rules,e,t,n).join(""),i=ee(te(this.baseHash,s)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a);}o.push(i),this.staticRulesId=i;}else {for(var c=this.rules.length,u=te(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h,"production"!=="production";else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=te(u,f+d),l+=f;}}if(l){var m=ee(u>>>0);if(!t.hasNameForId(r,m)){var y=n(l,"."+m,void 0,r);t.insertRules(r,m,y);}o.push(m);}}return o.join(" ")},e}(),ie=/^\s*\/\/.*$/gm,ae=[":","[",".","#"];function ce(e){var t,n,r,o,s=void 0===e?E:e,i=s.options,a=void 0===i?E:i,c=s.plugins,u=void 0===c?w$1:c,l=new stylis_min(a),d=[],h=function(e){function t(t){if(t)try{e(t+"}");}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t);}}}((function(e){d.push(e);})),f=function(e,r,s){return 0===r&&-1!==ae.indexOf(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(ie,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f));},h,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||j(15),te(e,t.name)}),5381).toString():"",m}var ue=react.createContext(),le=ue.Consumer,de=react.createContext(),he=(de.Consumer,new Z),pe=ce();function fe(){return react.useContext(ue)||he}function me(){return react.useContext(de)||pe}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=pe);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"));},this.toString=function(){return j(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t;}return e.prototype.getName=function(e){return void 0===e&&(e=pe),this.name+e.hash},e}(),ge=/([A-Z])/,Se=/([A-Z])/g,we=/^ms-/,Ee=function(e){return "-"+e.toLowerCase()};function be(e){return ge.test(e)?e.replace(Se,Ee).replace(we,"-ms-"):e}var _e=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(_e(e))return "";if(N(e))return "."+e.styledComponentId;if(b$1(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:S(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!_e(t[i])&&(Array.isArray(t[i])&&t[i].isCss||b$1(t[i])?s.push(be(i)+":",t[i],";"):S(t[i])?s.push.apply(s,e(t[i],i)):s.push(be(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitlessKeys?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}var Ae=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return b$1(e)||S(e)?Ae(Ne(g$1(w$1,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ae(Ne(g$1(e,n)))}var Re=function(e,t,n){return void 0===n&&(n=E),e.theme!==n.theme&&e.theme||t||n.theme},De=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,je=/(^-|-$)/g;function Te(e){return e.replace(De,"-").replace(je,"")}var ke=function(e){return ee(ne(e)>>>0)};function xe(e){return "string"==typeof e&&("production"==="production")}var Ve=function(e){return "function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Be=function(e){return "__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Me(e,t,n){var r=e[n];Ve(t)&&Ve(r)?ze(r,t):e[n]=t;}function ze(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(Ve(i))for(var a in i)Be(a)&&Me(e,i[a],a);}return e}var Le=react.createContext(),Ge=Le.Consumer;function Fe(e){var t=react.useContext(Le),n=react.useMemo((function(){return function(e,t){if(!e)return j(14);if(b$1(e)){var n=e(t);return n}return Array.isArray(e)||"object"!=typeof e?j(8):t?v$1({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?react.createElement(Le.Provider,{value:n},e.children):null}var Ye={};function qe(e,t,n){var o=N(e),i=!xe(e),a=t.attrs,c=void 0===a?w$1:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":Te(e);Ye[n]=(Ye[n]||0)+1;var r=n+"-"+ke("5.3.1"+n+Ye[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,f=void 0===p?function(e){return xe(e)?"styled."+e:"Styled("+_(e)+")"}(e):p,g=t.displayName&&t.componentId?Te(t.displayName)+"-"+t.componentId:t.componentId||h,S=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,A=t.shouldForwardProp;o&&e.shouldForwardProp&&(A=t.shouldForwardProp?function(n,r,o){return e.shouldForwardProp(n,r,o)&&t.shouldForwardProp(n,r,o)}:e.shouldForwardProp);var C,I=new se(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target;var f=function(e,t,n){void 0===e&&(e=E);var r=v$1({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in b$1(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t];})),[r,o]}(Re(t,react.useContext(Le),a)||E,t,o),y=f[0],g=f[1],S=function(e,t,n,r){var o=fe(),s=me(),i=t?e.generateAndInjectStyles(E,o,s):e.generateAndInjectStyles(n,o,s);return i}(i,r,y),w=n,_=g.$as||t.$as||g.as||t.as||p,N=xe(_),A=g!==t?v$1({},t,{},g):t,C={};for(var I in A)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?C.as=A[I]:(d?d(I,index,_):!N||index(I))&&(C[I]=A[I]));return t.style&&g.style!==t.style&&(C.style=v$1({},t.style,{},g.style)),C.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),C.ref=w,react.createElement(_,C)}(C,e,t,P)};return O.displayName=f,(C=react.forwardRef(O)).attrs=S,C.componentStyle=I,C.displayName=f,C.shouldForwardProp=A,C.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):w$1,C.styledComponentId=g,C.target=o?e.target:e,C.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return {};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(xe(e)?e:Te(_(e)));return qe(e,v$1({},o,{attrs:S,componentId:s}),n)},Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?ze({},e.defaultProps,t):t;}}),C.toString=function(){return "."+C.styledComponentId},i&&hoistNonReactStatics_cjs(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),C}var He=function(e){return function e(t,r,o){if(void 0===o&&(o=E),!reactIs.isValidElementType(r))return j(1,String(r));var s=function(){return t(r,o,Ce.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v$1({},o,{},n))},s.attrs=function(n){return e(t,r,v$1({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(qe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach((function(e){He[e]=He(e);}));

var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return target.propertyIsEnumerable(symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

var cjs = deepmerge_1;

const defaultColorMode = 'day';
const defaultDayScheme = 'light';
const defaultNightScheme = 'dark'; // eslint-disable-next-line @typescript-eslint/no-explicit-any

const ThemeContext = /*#__PURE__*/react.createContext({
  setColorMode: () => null,
  setDayScheme: () => null,
  setNightScheme: () => null
});
const ThemeProvider = ({
  children,
  ...props
}) => {
  var _ref, _props$theme, _ref2, _props$colorMode, _ref3, _props$dayScheme, _ref4, _props$nightScheme;

  // Get fallback values from parent ThemeProvider (if exists)
  const {
    theme: fallbackTheme,
    colorMode: fallbackColorMode,
    dayScheme: fallbackDayScheme,
    nightScheme: fallbackNightScheme
  } = useTheme(); // Initialize state

  const theme = (_ref = (_props$theme = props.theme) !== null && _props$theme !== void 0 ? _props$theme : fallbackTheme) !== null && _ref !== void 0 ? _ref : themePreval.theme;
  const [colorMode, setColorMode] = react.useState((_ref2 = (_props$colorMode = props.colorMode) !== null && _props$colorMode !== void 0 ? _props$colorMode : fallbackColorMode) !== null && _ref2 !== void 0 ? _ref2 : defaultColorMode);
  const [dayScheme, setDayScheme] = react.useState((_ref3 = (_props$dayScheme = props.dayScheme) !== null && _props$dayScheme !== void 0 ? _props$dayScheme : fallbackDayScheme) !== null && _ref3 !== void 0 ? _ref3 : defaultDayScheme);
  const [nightScheme, setNightScheme] = react.useState((_ref4 = (_props$nightScheme = props.nightScheme) !== null && _props$nightScheme !== void 0 ? _props$nightScheme : fallbackNightScheme) !== null && _ref4 !== void 0 ? _ref4 : defaultNightScheme);
  const systemColorMode = useSystemColorMode();
  const resolvedColorMode = resolveColorMode(colorMode, systemColorMode);
  const colorScheme = chooseColorScheme(resolvedColorMode, dayScheme, nightScheme);
  const resolvedTheme = react.useMemo(() => applyColorScheme(theme, colorScheme), [theme, colorScheme]); // Update state if props change

  react.useEffect(() => {
    var _ref5, _props$colorMode2;

    setColorMode((_ref5 = (_props$colorMode2 = props.colorMode) !== null && _props$colorMode2 !== void 0 ? _props$colorMode2 : fallbackColorMode) !== null && _ref5 !== void 0 ? _ref5 : defaultColorMode);
  }, [props.colorMode, fallbackColorMode]);
  react.useEffect(() => {
    var _ref6, _props$dayScheme2;

    setDayScheme((_ref6 = (_props$dayScheme2 = props.dayScheme) !== null && _props$dayScheme2 !== void 0 ? _props$dayScheme2 : fallbackDayScheme) !== null && _ref6 !== void 0 ? _ref6 : defaultDayScheme);
  }, [props.dayScheme, fallbackDayScheme]);
  react.useEffect(() => {
    var _ref7, _props$nightScheme2;

    setNightScheme((_ref7 = (_props$nightScheme2 = props.nightScheme) !== null && _props$nightScheme2 !== void 0 ? _props$nightScheme2 : fallbackNightScheme) !== null && _ref7 !== void 0 ? _ref7 : defaultNightScheme);
  }, [props.nightScheme, fallbackNightScheme]);
  return /*#__PURE__*/react.createElement(ThemeContext.Provider, {
    value: {
      theme: resolvedTheme,
      colorScheme,
      colorMode,
      resolvedColorMode,
      dayScheme,
      nightScheme,
      setColorMode,
      setDayScheme,
      setNightScheme
    }
  }, /*#__PURE__*/react.createElement(Fe, {
    theme: resolvedTheme
  }, children));
};
ThemeProvider.displayName = "ThemeProvider";
function useTheme() {
  return react.useContext(ThemeContext);
}

function useSystemColorMode() {
  const [systemColorMode, setSystemColorMode] = react.useState(getSystemColorMode);
  react.useEffect(() => {
    var _window, _window$matchMedia;

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    const media = (_window = window) === null || _window === void 0 ? void 0 : (_window$matchMedia = _window.matchMedia) === null || _window$matchMedia === void 0 ? void 0 : _window$matchMedia.call(_window, '(prefers-color-scheme: dark)');

    function handleChange(event) {
      const isNight = event.matches;
      setSystemColorMode(isNight ? 'night' : 'day');
    } // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition


    if (media) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (media.addEventListener !== undefined) {
        media.addEventListener('change', handleChange);
        return function cleanup() {
          media.removeEventListener('change', handleChange);
        };
      } // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      else if (media.addListener !== undefined) {
        media.addListener(handleChange);
        return function cleanup() {
          media.removeListener(handleChange);
        };
      }
    }
  }, []);
  return systemColorMode;
}

function getSystemColorMode() {
  var _window$matchMedia2, _window2, _window$matchMedia2$c;

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (typeof window !== 'undefined' && (_window$matchMedia2 = (_window2 = window).matchMedia) !== null && _window$matchMedia2 !== void 0 && (_window$matchMedia2$c = _window$matchMedia2.call(_window2, '(prefers-color-scheme: dark)')) !== null && _window$matchMedia2$c !== void 0 && _window$matchMedia2$c.matches) {
    return 'night';
  }

  return 'day';
}

function resolveColorMode(colorMode, systemColorMode) {
  switch (colorMode) {
    case 'auto':
      return systemColorMode;

    default:
      return colorMode;
  }
}

function chooseColorScheme(colorMode, dayScheme, nightScheme) {
  switch (colorMode) {
    case 'day':
      return dayScheme;

    case 'night':
      return nightScheme;
  }
}

function applyColorScheme(theme, colorScheme) {
  if (!theme.colorSchemes) {
    return theme;
  }

  if (!theme.colorSchemes[colorScheme]) {
    // eslint-disable-next-line no-console
    console.error(`\`${colorScheme}\` scheme not defined in \`theme.colorSchemes\``); // Apply the first defined color scheme

    const defaultColorScheme = Object.keys(theme.colorSchemes)[0];
    return cjs(theme, theme.colorSchemes[defaultColorScheme]);
  }

  return cjs(theme, theme.colorSchemes[colorScheme]);
}

const sx = props => css(props.sx);

const Box = He.div.withConfig({
  displayName: "Box",
  componentId: "nv15kw-0"
})(space, color, typography, layout, flexbox, grid, background, border, position, shadow, sx);

var buttonBaseStyles = Ce(["position:relative;display:inline-block;padding:6px 16px;font-family:inherit;font-weight:", ";line-height:20px;white-space:nowrap;vertical-align:middle;cursor:pointer;user-select:none;border-radius:", ";appearance:none;text-decoration:none;text-align:center;&:hover{text-decoration:none;}&:focus{outline:none;}&:disabled{cursor:default;}&:disabled svg{opacity:0.6;}"], get$2('fontWeights.bold'), get$2('radii.2'));

const buttonSystemProps = compose(fontSize, COMMON, LAYOUT);
const variants = variant({
  variants: {
    small: {
      p: '4px 12px',
      fontSize: 0
    },
    medium: {
      fontSize: 1
    },
    large: {
      fontSize: 2,
      p: '10px 20px'
    }
  }
});
const ButtonBase = He.button.attrs(({
  disabled,
  onClick
}) => ({
  onClick: disabled ? undefined : onClick
})).withConfig({
  displayName: "ButtonBase",
  componentId: "sc-181ps9o-0"
})(["", " ", ""], buttonBaseStyles, variants);
ButtonBase.defaultProps = {
  variant: 'medium'
};

const Button = He(ButtonBase).withConfig({
  displayName: "Button",
  componentId: "xjtz72-0"
})(["color:", ";background-color:", ";border:1px solid ", ";box-shadow:", ",", "};&:hover{background-color:", ";border-color:", ";}&:focus{border-color:", ";box-shadow:", ";}&:active{background-color:", ";box-shadow:", ";}&:disabled{color:", ";background-color:", ";border-color:", ";}", ";", ";"], get$2('colors.btn.text'), get$2('colors.btn.bg'), get$2('colors.btn.border'), get$2('shadows.btn.shadow'), get$2('shadows.btn.insetShadow'), get$2('colors.btn.hoverBg'), get$2('colors.btn.hoverBorder'), get$2('colors.btn.focusBorder'), get$2('shadows.btn.focusShadow'), get$2('colors.btn.selectedBg'), get$2('shadows.btn.shadowActive'), get$2('colors.fg.muted'), get$2('colors.btn.bg'), get$2('colors.btn.border'), buttonSystemProps, sx);

const ButtonPrimary = He(ButtonBase).withConfig({
  displayName: "ButtonPrimary",
  componentId: "sc-1050ge1-0"
})(["color:", ";border:1px solid ", ";background-color:", ";box-shadow:", ";&:hover{color:", ";background-color:", ";border-color:", ";box-shadow:", ";}&:focus{border-color:", ";box-shadow:", ";}&:active{background-color:", ";box-shadow:", ";}&:disabled{color:", ";background-color:", ";border-color:", ";}", ";", ";"], get$2('colors.btn.primary.text'), get$2('colors.btn.primary.border'), get$2('colors.btn.primary.bg'), get$2('shadows.btn.primary.shadow'), get$2('colors.btn.primary.hoverText'), get$2('colors.btn.primary.hoverBg'), get$2('colors.btn.primary.hoverBorder'), get$2('shadows.btn.primary.hoverShadow'), get$2('colors.btn.primary.focusBorder'), get$2('shadows.btn.primary.focusShadow'), get$2('colors.btn.primary.selectedBg'), get$2('shadows.btn.primary.selectedShadow'), get$2('colors.btn.primary.disabledText'), get$2('colors.btn.primary.disabledBg'), get$2('colors.btn.primary.disabledBorder'), buttonSystemProps, sx);

function getBorderRadius({
  size,
  square
}) {
  if (square) {
    return size && size <= 24 ? '4px' : '6px';
  } else {
    return '50%';
  }
}

const Avatar = He.img.attrs(props => ({
  height: props.size,
  width: props.size
})).withConfig({
  displayName: "Avatar",
  componentId: "sc-1waaaky-0"
})(["display:inline-block;overflow:hidden;line-height:", ";vertical-align:middle;border-radius:", ";", ";", ""], get$2('lineHeights.condensedUltra'), props => getBorderRadius(props), COMMON, sx);
Avatar.defaultProps = {
  size: 20,
  alt: '',
  square: false
};

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

const FormGroup = He.div.withConfig({
  displayName: "FormGroup",
  componentId: "sc-14z6yax-0"
})(["margin:", " 0;font-weight:", ";", ";", ";"], get$2('space.3'), get$2('fontWeights.normal'), COMMON, sx);
const FormGroupLabel = He.label.withConfig({
  displayName: "FormGroup__FormGroupLabel",
  componentId: "sc-14z6yax-1"
})(["display:block;margin:0 0 ", ";font-size:", ";font-weight:", ";", ";", ";", ";"], get$2('space.2'), get$2('fontSizes.1'), get$2('fontWeights.bold'), TYPOGRAPHY, COMMON, sx);
FormGroupLabel.displayName = 'FormGroup.Label';
var FormGroup$1 = Object.assign(FormGroup, {
  Label: FormGroupLabel
});

// eslint-disable-next-line import/no-namespace
const Header = He.div.withConfig({
  displayName: "Header",
  componentId: "sc-217i47-0"
})(["z-index:32;display:flex;padding:", ";font-size:", ";line-height:", ";color:", ";background-color:", ";align-items:center;flex-wrap:nowrap;", " ", " ", ";"], get$2('space.3'), get$2('fontSizes.1'), get$2('lineHeights.default'), get$2('colors.header.text'), get$2('colors.header.bg'), COMMON, BORDER, sx);
const HeaderItem = He.div.withConfig({
  displayName: "Header__HeaderItem",
  componentId: "sc-217i47-1"
})(["display:flex;margin-right:", ";align-self:stretch;align-items:center;flex-wrap:nowrap;", ";", ";", ";", ";"], get$2('space.3'), ({
  full
}) => full && Ce(["flex:auto;"]), COMMON, BORDER, sx);
HeaderItem.displayName = 'Header.Item';
const HeaderLink = He.a.attrs(({
  to
}) => {
  const isReactRouter = typeof to === 'string';

  if (isReactRouter) {
    // according to their docs, NavLink supports aria-current:
    // https://reacttraining.com/react-router/web/api/NavLink/aria-current-string
    return {
      'aria-current': 'page'
    };
  } else {
    return {};
  }
}).withConfig({
  displayName: "Header__HeaderLink",
  componentId: "sc-217i47-2"
})(["font-weight:", ";color:", ";white-space:nowrap;cursor:pointer;text-decoration:none;display:flex;align-items:center;&:hover,&:focus{color:", ";}", ";", ";", ";", ";"], get$2('fontWeights.bold'), get$2('colors.header.logo'), get$2('colors.header.text'), COMMON, BORDER, TYPOGRAPHY, sx);
HeaderLink.displayName = 'Header.Link';
var Header$1 = Object.assign(Header, {
  Link: HeaderLink,
  Item: HeaderItem
});

const Heading = He.h2.withConfig({
  displayName: "Heading",
  componentId: "sc-1cjoo9h-0"
})(["font-weight:", ";font-size:", ";margin:0;", ";", ";", ";"], get$2('fontWeights.bold'), get$2('fontSizes.5'), TYPOGRAPHY, COMMON, sx);
Heading.defaultProps = {
  theme: themePreval.theme
};

const hoverColor = system({
  hoverColor: {
    property: 'color',
    scale: 'colors'
  }
});
const Link = He.a.withConfig({
  displayName: "Link",
  componentId: "sc-1brdqhf-0"
})(["color:", ";text-decoration:", ";&:hover{text-decoration:", ";", ";}&:is(button){display:inline-block;padding:0;font-size:inherit;white-space:nowrap;cursor:pointer;user-select:none;background-color:transparent;border:0;appearance:none;}", ";", ";", ";"], props => props.muted ? get$2('colors.fg.muted')(props) : get$2('colors.accent.fg')(props), props => props.underline ? 'underline' : 'none', props => props.muted ? 'none' : 'underline', props => props.hoverColor ? hoverColor : props.muted ? `color: ${get$2('colors.accent.fg')(props)}` : '', TYPOGRAPHY, COMMON, sx);

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
const sizeVariants = variant({
  variants: {
    small: {
      minHeight: '28px',
      px: 2,
      py: '3px',
      fontSize: 0,
      lineHeight: '20px'
    },
    large: {
      px: 2,
      py: '10px',
      fontSize: 3
    }
  }
});
const Input = He.input.withConfig({
  displayName: "TextInput__Input",
  componentId: "sc-1apmpmt-0"
})(["border:0;font-size:inherit;font-family:inherit;background-color:transparent;-webkit-appearance:none;color:inherit;width:100%;&:focus{outline:0;}"]);
const Wrapper = He.span.withConfig({
  displayName: "TextInput__Wrapper",
  componentId: "sc-1apmpmt-1"
})(["display:inline-flex;align-items:stretch;min-height:34px;font-size:", ";line-height:20px;color:", ";vertical-align:middle;background-repeat:no-repeat;background-position:right 8px center;border:1px solid ", ";border-radius:", ";outline:none;box-shadow:", ";", " .TextInput-icon{align-self:center;color:", ";margin:0 ", ";flex-shrink:0;}&:focus-within{border-color:", ";box-shadow:", ";}", " ", " ", " @media (min-width:", "){font-size:", ";}", " ", " ", " ", " ", ";"], get$2('fontSizes.1'), get$2('colors.fg.default'), get$2('colors.border.default'), get$2('radii.2'), get$2('shadows.primer.shadow.inset'), props => {
  if (props.hasIcon) {
    return Ce(["padding:0;"]);
  } else {
    return Ce(["padding:6px 12px;"]);
  }
}, get$2('colors.fg.muted'), get$2('space.2'), get$2('colors.accent.emphasis'), get$2('shadows.primer.shadow.focus'), props => props.contrast && Ce(["background-color:", ";"], get$2('colors.canvas.inset')), props => props.disabled && Ce(["color:", ";background-color:", ";border-color:", ";"], get$2('colors.fg.muted'), get$2('colors.input.disabledBg'), get$2('colors.border.default')), props => props.block && Ce(["display:block;width:100%;"]), get$2('breakpoints.1'), get$2('fontSizes.1'), width, minWidth, maxWidth, sizeVariants, sx); // Props that are not passed through to Input:

// using forwardRef is important so that other components (ex. SelectMenu) can autofocus the input
const TextInput = /*#__PURE__*/react.forwardRef(({
  icon: IconComponent,
  block,
  className,
  contrast,
  disabled,
  sx: sxProp,
  theme,
  width: widthProp,
  minWidth: minWidthProp,
  maxWidth: maxWidthProp,
  variant: variantProp,
  ...inputProps
}, ref) => {
  // this class is necessary to style FilterSearch, plz no touchy!
  const wrapperClasses = classnames(className, 'TextInput-wrapper');
  return /*#__PURE__*/react.createElement(Wrapper, {
    block: block,
    className: wrapperClasses,
    contrast: contrast,
    disabled: disabled,
    hasIcon: !!IconComponent,
    sx: sxProp,
    theme: theme,
    width: widthProp,
    minWidth: minWidthProp,
    maxWidth: maxWidthProp,
    variant: variantProp
  }, IconComponent && /*#__PURE__*/react.createElement(IconComponent, {
    className: "TextInput-icon"
  }), /*#__PURE__*/react.createElement(Input, _extends$1({
    ref: ref,
    disabled: disabled
  }, inputProps)));
});
TextInput.defaultProps = {
  type: 'text'
};
TextInput.displayName = 'TextInput';

export { Avatar, Box, Button, ButtonPrimary, FormGroup$1 as FormGroup, Header$1 as Header, Heading, Link, TextInput, ThemeProvider };
