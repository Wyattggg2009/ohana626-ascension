// Public, non-secret story and evidence. Answers are stored only in Supabase.
export const CASES = [
  {
    "id": 1,
    "date": "Nov 30",
    "title": "Activation & First Contact",
    "tag": "AUTHENTICATION BREACH",
    "story": "An emergency dispatch has been spoofed. Five transmissions claim Federation authorization, but only one can open the first security door.",
    "lead": "The Federation did not lose a thing. It lost a trail. And the trail begins with a familiar handler.",
    "emotion": "The beginning of an adventure sometimes sounds like a simple hello.",
    "message": "626 did NOT steal a thing. 626 just may have borrowed the filing cabinet.",
    "dispatch": {
      "title": "Dispatch intercept // incident 01",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-53. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-01-4",
          "caller": "FEDERATION",
          "level": 6,
          "seal": "SOLAR"
        },
        {
          "id": "TX-01-1",
          "caller": "WYATT",
          "level": 7,
          "seal": "ORBIT"
        },
        {
          "id": "TX-01-2",
          "caller": "WYATT",
          "level": 8,
          "seal": "VISTA"
        },
        {
          "id": "TX-01-3",
          "caller": "FEDERATION",
          "level": 7,
          "seal": "RAVEN"
        },
        {
          "id": "TX-01-5",
          "caller": "WYATT",
          "level": 9,
          "seal": "STARS"
        }
      ],
      "batch": "BATCH-53"
    },
    "registry": {
      "title": "Personnel Registry // verification 01",
      "intro": "Authentic callsign: WYATT. Required clearance: 7. Seal orientation protocol: NORMAL (keep letter order). Four-sector keypad route: EAST → SOUTH → WEST → NORTH. Camera reel read direction: EARLIEST TO LATEST.",
      "caller": "WYATT",
      "clearance": 7,
      "mirror": false,
      "order": [
        "EAST",
        "SOUTH",
        "WEST",
        "NORTH"
      ],
      "reel": "FORWARD",
      "note": "Cross-check the lab specimens before applying the door keypad order."
    },
    "surveillance": {
      "title": "Camera wall // reel 01",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C2",
          "minute": 15,
          "channel": "SAFE",
          "glyph": "Z"
        },
        {
          "camera": "C5",
          "minute": 27,
          "channel": "SAFE",
          "glyph": "U"
        },
        {
          "camera": "C4",
          "minute": 8,
          "channel": "SAFE",
          "glyph": "E"
        },
        {
          "camera": "C3",
          "minute": 9,
          "channel": "SAFE",
          "glyph": "F"
        },
        {
          "camera": "C1",
          "minute": 19,
          "channel": "SPOOF",
          "glyph": "Q"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 01",
      "intro": "Quarantined channel: SPOOF. Verified channel: SAFE. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "SPOOF",
      "valid": "SAFE",
      "calibration": [
        {
          "camera": "C3",
          "offset": 5
        },
        {
          "camera": "C4",
          "offset": 3
        },
        {
          "camera": "C1",
          "offset": -3
        },
        {
          "camera": "C5",
          "offset": -5
        },
        {
          "camera": "C2",
          "offset": 3
        }
      ],
      "samples": [
        {
          "sector": "WEST",
          "batch": "BATCH-87",
          "a": 5,
          "b": 2
        },
        {
          "sector": "EAST",
          "batch": "BATCH-53",
          "a": 8,
          "b": 1
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-87",
          "a": 3,
          "b": 7
        },
        {
          "sector": "WEST",
          "batch": "BATCH-53",
          "a": 4,
          "b": 6
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-53",
          "a": 5,
          "b": 1
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-87",
          "a": 4,
          "b": 1
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-53",
          "a": 4,
          "b": 2
        },
        {
          "sector": "EAST",
          "batch": "BATCH-87",
          "a": 7,
          "b": 1
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the absolute difference between A and B and write those four digits in route order.",
        "format": "4-digit power code"
      }
    ],
    "hidden": "",
    "addon": null,
    "evidenceTitle": "First Contact: Activation & First Contact",
    "evidence": "The beginning of an adventure sometimes sounds like a simple hello."
  },
  {
    "id": 2,
    "date": "Dec 1",
    "title": "Franklin High Anomaly",
    "tag": "CLASSROOM FORENSICS",
    "story": "A sealed attendance record from Franklin High School has surfaced. The Registry says someone rewrote a classroom badge.",
    "lead": "Mr. Pergrem’s classroom appears in the investigation under a suspiciously ordinary name.",
    "emotion": "One room, one ordinary day, and a different future.",
    "message": "626 sat in the wrong classroom. Got an A in chaos.",
    "dispatch": {
      "title": "Dispatch intercept // incident 02",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-70. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-02-5",
          "caller": "PERGREM",
          "level": 6,
          "seal": "TRACE"
        },
        {
          "id": "TX-02-1",
          "caller": "PERGREM",
          "level": 4,
          "seal": "TRACE"
        },
        {
          "id": "TX-02-2",
          "caller": "PERGREM",
          "level": 5,
          "seal": "UNION"
        },
        {
          "id": "TX-02-4",
          "caller": "FEDERATION",
          "level": 3,
          "seal": "STARS"
        },
        {
          "id": "TX-02-3",
          "caller": "FEDERATION",
          "level": 4,
          "seal": "ECHO"
        }
      ],
      "batch": "BATCH-70"
    },
    "registry": {
      "title": "Personnel Registry // verification 02",
      "intro": "Authentic callsign: PERGREM. Required clearance: 4. Seal orientation protocol: MIRROR (reverse all letters). Four-sector keypad route: SOUTH → NORTH → WEST → EAST. Camera reel read direction: EARLIEST TO LATEST.",
      "caller": "PERGREM",
      "clearance": 4,
      "mirror": true,
      "order": [
        "SOUTH",
        "NORTH",
        "WEST",
        "EAST"
      ],
      "reel": "FORWARD",
      "note": "Cross-check the lab specimens before applying the door keypad order."
    },
    "surveillance": {
      "title": "Camera wall // reel 02",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C3",
          "minute": 15,
          "channel": "VERIFIED",
          "glyph": "X"
        },
        {
          "camera": "C1",
          "minute": 23,
          "channel": "VERIFIED",
          "glyph": "H"
        },
        {
          "camera": "C5",
          "minute": 13,
          "channel": "VERIFIED",
          "glyph": "V"
        },
        {
          "camera": "C4",
          "minute": 13,
          "channel": "NOISE",
          "glyph": "Q"
        },
        {
          "camera": "C2",
          "minute": 26,
          "channel": "VERIFIED",
          "glyph": "C"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 02",
      "intro": "Quarantined channel: NOISE. Verified channel: VERIFIED. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "NOISE",
      "valid": "VERIFIED",
      "calibration": [
        {
          "camera": "C2",
          "offset": -4
        },
        {
          "camera": "C3",
          "offset": -1
        },
        {
          "camera": "C1",
          "offset": -5
        },
        {
          "camera": "C4",
          "offset": 3
        },
        {
          "camera": "C5",
          "offset": -2
        }
      ],
      "samples": [
        {
          "sector": "EAST",
          "batch": "BATCH-70",
          "a": 4,
          "b": 4
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-70",
          "a": 8,
          "b": 4
        },
        {
          "sector": "WEST",
          "batch": "BATCH-38",
          "a": 7,
          "b": 1
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-38",
          "a": 3,
          "b": 7
        },
        {
          "sector": "EAST",
          "batch": "BATCH-38",
          "a": 2,
          "b": 1
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-70",
          "a": 8,
          "b": 3
        },
        {
          "sector": "WEST",
          "batch": "BATCH-70",
          "a": 2,
          "b": 4
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-38",
          "a": 5,
          "b": 1
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the LAST digit of A+B and write those four digits in route order. Then visit the Registry side exhibit (labeled Pergrem classroom seating annex). Determine Bella’s desk number; append its digit.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "",
    "addon": {
      "room": "registry",
      "title": "Pergrem classroom seating annex",
      "text": "Four desks face the front. The monitor occupies desk 1. Wyatt sits exactly two desks to the right of the monitor. Bella sits immediately left of Wyatt. The runner takes the last remaining desk.",
      "lines": [
        "DESK 1   DESK 2   DESK 3   DESK 4",
        "PEOPLE: Monitor / Wyatt / Bella / Runner",
        "DESK NUMBERS INCREASE LEFT TO RIGHT"
      ],
      "instruction": "Determine Bella’s desk number; append its digit."
    },
    "evidenceTitle": "Franklin High Anomaly / recovery evidence",
    "evidence": "One room, one ordinary day, and a different future."
  },
  {
    "id": 3,
    "date": "Dec 2",
    "title": "Homecoming Surveillance",
    "tag": "CAMERA RECONSTRUCTION",
    "story": "The Homecoming surveillance reel has been re-timestamped. Every camera lies by a different number of minutes.",
    "lead": "This was the first time two people felt really out together. The Federation calls it a major event.",
    "emotion": "Some nights deserve their own entire file.",
    "message": "626 CAN dance. No one said it would be safe.",
    "dispatch": {
      "title": "Dispatch intercept // incident 03",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-87. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-03-2",
          "caller": "PROM",
          "level": 7,
          "seal": "TRACE"
        },
        {
          "id": "TX-03-3",
          "caller": "WATCHDOG",
          "level": 6,
          "seal": "RAVEN"
        },
        {
          "id": "TX-03-5",
          "caller": "PROM",
          "level": 8,
          "seal": "NEXUS"
        },
        {
          "id": "TX-03-1",
          "caller": "PROM",
          "level": 6,
          "seal": "NEXUS"
        },
        {
          "id": "TX-03-4",
          "caller": "ARCHIVIST",
          "level": 5,
          "seal": "GLINT"
        }
      ],
      "batch": "BATCH-87"
    },
    "registry": {
      "title": "Personnel Registry // verification 03",
      "intro": "Authentic callsign: PROM. Required clearance: 6. Seal orientation protocol: NORMAL (keep letter order). Four-sector keypad route: SOUTH → WEST → NORTH → EAST. Camera reel read direction: EARLIEST TO LATEST.",
      "caller": "PROM",
      "clearance": 6,
      "mirror": false,
      "order": [
        "SOUTH",
        "WEST",
        "NORTH",
        "EAST"
      ],
      "reel": "FORWARD",
      "note": "Cross-check the lab specimens before applying the door keypad order."
    },
    "surveillance": {
      "title": "Camera wall // reel 03",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C5",
          "minute": 18,
          "channel": "CLEAR",
          "glyph": "X"
        },
        {
          "camera": "C3",
          "minute": 23,
          "channel": "CLEAR",
          "glyph": "W"
        },
        {
          "camera": "C4",
          "minute": 13,
          "channel": "CLEAR",
          "glyph": "S"
        },
        {
          "camera": "C1",
          "minute": 18,
          "channel": "DARK",
          "glyph": "Z"
        },
        {
          "camera": "C2",
          "minute": 17,
          "channel": "CLEAR",
          "glyph": "V"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 03",
      "intro": "Quarantined channel: DARK. Verified channel: CLEAR. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "DARK",
      "valid": "CLEAR",
      "calibration": [
        {
          "camera": "C4",
          "offset": -2
        },
        {
          "camera": "C3",
          "offset": -5
        },
        {
          "camera": "C5",
          "offset": 4
        },
        {
          "camera": "C2",
          "offset": -3
        },
        {
          "camera": "C1",
          "offset": -2
        }
      ],
      "samples": [
        {
          "sector": "SOUTH",
          "batch": "BATCH-69",
          "a": 2,
          "b": 3
        },
        {
          "sector": "EAST",
          "batch": "BATCH-87",
          "a": 5,
          "b": 2
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-87",
          "a": 4,
          "b": 1
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-87",
          "a": 3,
          "b": 7
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-69",
          "a": 8,
          "b": 4
        },
        {
          "sector": "EAST",
          "batch": "BATCH-69",
          "a": 6,
          "b": 1
        },
        {
          "sector": "WEST",
          "batch": "BATCH-87",
          "a": 8,
          "b": 2
        },
        {
          "sector": "WEST",
          "batch": "BATCH-69",
          "a": 1,
          "b": 2
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory",
          "surveillance"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the LAST digit of A×B and write those four digits in route order. Then visit the Surveillance side exhibit (labeled Homecoming entry-control reel). Append the camera ID of the earliest event.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "",
    "addon": {
      "room": "surveillance",
      "title": "Homecoming entry-control reel",
      "text": "Three event frames were recovered from the dance. The camera IDs are not arranged by time. The first entry event holds the marker.",
      "lines": [
        "CAM A • dance floor opens • 18:10",
        "CAM B • portrait booth • 19:05",
        "CAM C • main entrance • 17:50"
      ],
      "instruction": "Append the camera ID of the earliest event."
    },
    "evidenceTitle": "Homecoming Surveillance / recovery evidence",
    "evidence": "Some nights deserve their own entire file."
  },
  {
    "id": 4,
    "date": "Dec 3",
    "title": "Bright Lights Incident",
    "tag": "ILLUMINATION FAILURE",
    "story": "Security has recovered a dazzling light-event log. Witness testimony conflicts with the timestamp feed.",
    "lead": "Some bright lights should probably have come with a warning label.",
    "emotion": "A mistake can become the thing you both laugh about later.",
    "message": "626 has sunglasses now. Federation should have issued them.",
    "dispatch": {
      "title": "Dispatch intercept // incident 04",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-14. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-04-3",
          "caller": "SCANNER",
          "level": 8,
          "seal": "COMET"
        },
        {
          "id": "TX-04-4",
          "caller": "FEDERATION",
          "level": 7,
          "seal": "ORBIT"
        },
        {
          "id": "TX-04-1",
          "caller": "BEACON",
          "level": 8,
          "seal": "RAVEN"
        },
        {
          "id": "TX-04-5",
          "caller": "BEACON",
          "level": 10,
          "seal": "PRISM"
        },
        {
          "id": "TX-04-2",
          "caller": "BEACON",
          "level": 9,
          "seal": "PRISM"
        }
      ],
      "batch": "BATCH-14"
    },
    "registry": {
      "title": "Personnel Registry // verification 04",
      "intro": "Authentic callsign: BEACON. Required clearance: 8. Seal orientation protocol: MIRROR (reverse all letters). Four-sector keypad route: SOUTH → WEST → EAST → NORTH. Camera reel read direction: LATEST TO EARLIEST.",
      "caller": "BEACON",
      "clearance": 8,
      "mirror": true,
      "order": [
        "SOUTH",
        "WEST",
        "EAST",
        "NORTH"
      ],
      "reel": "REVERSE",
      "note": "Cross-check the lab specimens before applying the door keypad order."
    },
    "surveillance": {
      "title": "Camera wall // reel 04",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C2",
          "minute": 15,
          "channel": "ECHO",
          "glyph": "H"
        },
        {
          "camera": "C1",
          "minute": 14,
          "channel": "ECHO",
          "glyph": "Y"
        },
        {
          "camera": "C5",
          "minute": 15,
          "channel": "ECHO",
          "glyph": "Q"
        },
        {
          "camera": "C4",
          "minute": 14,
          "channel": "STATIC",
          "glyph": "Z"
        },
        {
          "camera": "C3",
          "minute": 25,
          "channel": "ECHO",
          "glyph": "M"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 04",
      "intro": "Quarantined channel: STATIC. Verified channel: ECHO. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "STATIC",
      "valid": "ECHO",
      "calibration": [
        {
          "camera": "C3",
          "offset": -3
        },
        {
          "camera": "C4",
          "offset": 2
        },
        {
          "camera": "C5",
          "offset": 3
        },
        {
          "camera": "C1",
          "offset": -3
        },
        {
          "camera": "C2",
          "offset": -1
        }
      ],
      "samples": [
        {
          "sector": "EAST",
          "batch": "BATCH-14",
          "a": 6,
          "b": 4
        },
        {
          "sector": "EAST",
          "batch": "BATCH-20",
          "a": 3,
          "b": 1
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-14",
          "a": 6,
          "b": 7
        },
        {
          "sector": "WEST",
          "batch": "BATCH-20",
          "a": 8,
          "b": 1
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-20",
          "a": 2,
          "b": 6
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-20",
          "a": 2,
          "b": 2
        },
        {
          "sector": "WEST",
          "batch": "BATCH-14",
          "a": 7,
          "b": 2
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-14",
          "a": 6,
          "b": 5
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory",
          "surveillance"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the absolute difference between A and B and write those four digits in route order. Then visit the Surveillance side exhibit (labeled Flash incident witness reconstruction). Append the ID of the first lamp in the witness reconstruction.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "",
    "addon": {
      "room": "surveillance",
      "title": "Flash incident witness reconstruction",
      "text": "Four lamps occupy a square. The witness was struck by the lower-left lamp, then the one directly above it. The first lamp ID is the appendix marker.",
      "lines": [
        "A (top-left)      B (top-right)",
        "C (bottom-left)   D (bottom-right)",
        "WITNESS: bottom-left → directly above"
      ],
      "instruction": "Append the ID of the first lamp in the witness reconstruction."
    },
    "evidenceTitle": "Bright Lights Incident / recovery evidence",
    "evidence": "A mistake can become the thing you both laugh about later."
  },
  {
    "id": 5,
    "date": "Dec 4",
    "title": "Unknown Blue Entity",
    "tag": "SPECTRAL FILTER",
    "story": "Every unfiltered spectrum reading points in a different direction. Only verified blue-band traces should be trusted.",
    "lead": "Something blue keeps turning up in every recovered camera roll.",
    "emotion": "Some colors seem like someone you know.",
    "message": "626 is blue. Therefore 626 is evidence. Very scientific.",
    "dispatch": {
      "title": "Dispatch intercept // incident 05",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-31. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-05-1",
          "caller": "AZURE",
          "level": 3,
          "seal": "CROWN"
        },
        {
          "id": "TX-05-4",
          "caller": "ARCHIVIST",
          "level": 2,
          "seal": "NORTH"
        },
        {
          "id": "TX-05-5",
          "caller": "AZURE",
          "level": 5,
          "seal": "NORTH"
        },
        {
          "id": "TX-05-2",
          "caller": "AZURE",
          "level": 4,
          "seal": "NORTH"
        },
        {
          "id": "TX-05-3",
          "caller": "FEDERATION",
          "level": 3,
          "seal": "FLARE"
        }
      ],
      "batch": "BATCH-31"
    },
    "registry": {
      "title": "Personnel Registry // verification 05",
      "intro": "Authentic callsign: AZURE. Required clearance: 3. Seal orientation protocol: MIRROR (reverse all letters). Four-sector keypad route: SOUTH → EAST → WEST → NORTH. Camera reel read direction: EARLIEST TO LATEST.",
      "caller": "AZURE",
      "clearance": 3,
      "mirror": true,
      "order": [
        "SOUTH",
        "EAST",
        "WEST",
        "NORTH"
      ],
      "reel": "FORWARD",
      "note": "Cross-check the lab specimens before applying the door keypad order."
    },
    "surveillance": {
      "title": "Camera wall // reel 05",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C3",
          "minute": 19,
          "channel": "GHOST",
          "glyph": "Q"
        },
        {
          "camera": "C1",
          "minute": 27,
          "channel": "COBALT",
          "glyph": "J"
        },
        {
          "camera": "C2",
          "minute": 10,
          "channel": "COBALT",
          "glyph": "S"
        },
        {
          "camera": "C4",
          "minute": 13,
          "channel": "COBALT",
          "glyph": "R"
        },
        {
          "camera": "C5",
          "minute": 19,
          "channel": "COBALT",
          "glyph": "W"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 05",
      "intro": "Quarantined channel: GHOST. Verified channel: COBALT. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "GHOST",
      "valid": "COBALT",
      "calibration": [
        {
          "camera": "C1",
          "offset": -5
        },
        {
          "camera": "C4",
          "offset": 5
        },
        {
          "camera": "C2",
          "offset": 1
        },
        {
          "camera": "C3",
          "offset": -3
        },
        {
          "camera": "C5",
          "offset": -5
        }
      ],
      "samples": [
        {
          "sector": "SOUTH",
          "batch": "BATCH-51",
          "a": 3,
          "b": 4
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-51",
          "a": 5,
          "b": 6
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-31",
          "a": 8,
          "b": 2
        },
        {
          "sector": "WEST",
          "batch": "BATCH-51",
          "a": 6,
          "b": 6
        },
        {
          "sector": "WEST",
          "batch": "BATCH-31",
          "a": 7,
          "b": 3
        },
        {
          "sector": "EAST",
          "batch": "BATCH-31",
          "a": 3,
          "b": 6
        },
        {
          "sector": "EAST",
          "batch": "BATCH-51",
          "a": 4,
          "b": 1
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-31",
          "a": 3,
          "b": 4
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the LAST digit of A+B and write those four digits in route order. Then visit the Laboratory side exhibit (labeled Blue-spectrum subtraction). Subtract MIDNIGHT from COBALT; append the last digit of the result.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "",
    "addon": {
      "room": "laboratory",
      "title": "Blue-spectrum subtraction",
      "text": "A blue-only scanner produced three stable color-index readings, but one channel was corrupted. Use the values below.",
      "lines": [
        "COBALT VERIFIED  | 12",
        "MIDNIGHT VERIFIED | 05",
        "NOISE CORRUPTED  | 99"
      ],
      "instruction": "Subtract MIDNIGHT from COBALT; append the last digit of the result."
    },
    "evidenceTitle": "Unknown Blue Entity / recovery evidence",
    "evidence": "Some colors seem like someone you know."
  },
  {
    "id": 6,
    "date": "Dec 5",
    "title": "Monster Protocol",
    "tag": "ENERGY BATCH AUDIT",
    "story": "A fictional energy-lab shipment contains altered batch labels. The official compound can only be reconstructed by cross-reading the lab ledger.",
    "lead": "The lab issued a warning about unauthorized caffeine and one extremely excited alien.",
    "emotion": "The little favorites are part of a person too.",
    "message": "626 drank all the science. Science now VERY FAST.",
    "dispatch": {
      "title": "Dispatch intercept // incident 06",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-48. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-06-2",
          "caller": "MONSTER",
          "level": 6,
          "seal": "SOLAR"
        },
        {
          "id": "TX-06-5",
          "caller": "MONSTER",
          "level": 7,
          "seal": "GLINT"
        },
        {
          "id": "TX-06-1",
          "caller": "MONSTER",
          "level": 5,
          "seal": "STARS"
        },
        {
          "id": "TX-06-4",
          "caller": "SCANNER",
          "level": 4,
          "seal": "NORTH"
        },
        {
          "id": "TX-06-3",
          "caller": "SCANNER",
          "level": 5,
          "seal": "ECHO"
        }
      ],
      "batch": "BATCH-48"
    },
    "registry": {
      "title": "Personnel Registry // verification 06",
      "intro": "Authentic callsign: MONSTER. Required clearance: 5. Seal orientation protocol: MIRROR (reverse all letters). Four-sector keypad route: NORTH → SOUTH → EAST → WEST. Camera reel read direction: EARLIEST TO LATEST.",
      "caller": "MONSTER",
      "clearance": 5,
      "mirror": true,
      "order": [
        "NORTH",
        "SOUTH",
        "EAST",
        "WEST"
      ],
      "reel": "FORWARD",
      "note": "Cross-check the lab specimens before applying the door keypad order."
    },
    "surveillance": {
      "title": "Camera wall // reel 06",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C4",
          "minute": 15,
          "channel": "SAFE",
          "glyph": "L"
        },
        {
          "camera": "C3",
          "minute": 12,
          "channel": "SAFE",
          "glyph": "C"
        },
        {
          "camera": "C5",
          "minute": 19,
          "channel": "SAFE",
          "glyph": "S"
        },
        {
          "camera": "C1",
          "minute": 15,
          "channel": "SAFE",
          "glyph": "Q"
        },
        {
          "camera": "C2",
          "minute": 20,
          "channel": "SPOOF",
          "glyph": "X"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 06",
      "intro": "Quarantined channel: SPOOF. Verified channel: SAFE. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "SPOOF",
      "valid": "SAFE",
      "calibration": [
        {
          "camera": "C4",
          "offset": -1
        },
        {
          "camera": "C2",
          "offset": -4
        },
        {
          "camera": "C5",
          "offset": 3
        },
        {
          "camera": "C1",
          "offset": 3
        },
        {
          "camera": "C3",
          "offset": -1
        }
      ],
      "samples": [
        {
          "sector": "SOUTH",
          "batch": "BATCH-82",
          "a": 1,
          "b": 5
        },
        {
          "sector": "EAST",
          "batch": "BATCH-48",
          "a": 5,
          "b": 6
        },
        {
          "sector": "WEST",
          "batch": "BATCH-82",
          "a": 2,
          "b": 5
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-82",
          "a": 4,
          "b": 6
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-48",
          "a": 2,
          "b": 6
        },
        {
          "sector": "WEST",
          "batch": "BATCH-48",
          "a": 2,
          "b": 5
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-48",
          "a": 4,
          "b": 2
        },
        {
          "sector": "EAST",
          "batch": "BATCH-82",
          "a": 8,
          "b": 5
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the LAST digit of A×B and write those four digits in route order. Then visit the Dispatch side exhibit (labeled Approved energy-lot checksum). Use today’s authorized batch number, not the decoy specimen batch.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "",
    "addon": {
      "room": "dispatch",
      "title": "Approved energy-lot checksum",
      "text": "Federation intake requires a checksum from the approved BATCH identifier that is printed above the dispatch intercepts.",
      "lines": [
        "Take the TWO digits after BATCH-",
        "ADD the digits together",
        "Append the final digit of that sum"
      ],
      "instruction": "Use today’s authorized batch number, not the decoy specimen batch."
    },
    "evidenceTitle": "Monster Protocol / recovery evidence",
    "evidence": "The little favorites are part of a person too."
  },
  {
    "id": 7,
    "date": "Dec 6",
    "title": "Wolf Signature",
    "tag": "TRACK IDENTIFICATION",
    "story": "A wolf-shaped signature has crossed the border into an unlisted classified annex. Identifying the real track requires matching several records.",
    "lead": "The pawprints are not a threat; they point toward something important.",
    "emotion": "Some instincts always know who belongs beside you.",
    "message": "626 followed wolf. Wolf followed 626 snack bag. Teamwork.",
    "dispatch": {
      "title": "Dispatch intercept // incident 07",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-65. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-07-4",
          "caller": "SCANNER",
          "level": 8,
          "seal": "NORTH"
        },
        {
          "id": "TX-07-5",
          "caller": "WOLF",
          "level": 11,
          "seal": "RAVEN"
        },
        {
          "id": "TX-07-2",
          "caller": "WOLF",
          "level": 10,
          "seal": "NEXUS"
        },
        {
          "id": "TX-07-1",
          "caller": "WOLF",
          "level": 9,
          "seal": "NORTH"
        },
        {
          "id": "TX-07-3",
          "caller": "INFORMANT",
          "level": 9,
          "seal": "RAVEN"
        }
      ],
      "batch": "BATCH-65"
    },
    "registry": {
      "title": "Personnel Registry // verification 07",
      "intro": "Authentic callsign: WOLF. Required clearance: 9. Seal orientation protocol: NORMAL (keep letter order). Four-sector keypad route: WEST → NORTH → SOUTH → EAST. Camera reel read direction: EARLIEST TO LATEST.",
      "caller": "WOLF",
      "clearance": 9,
      "mirror": false,
      "order": [
        "WEST",
        "NORTH",
        "SOUTH",
        "EAST"
      ],
      "reel": "FORWARD",
      "note": "A scratched arrow reads /classified. The wolf is the key."
    },
    "surveillance": {
      "title": "Camera wall // reel 07",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C4",
          "minute": 12,
          "channel": "NOISE",
          "glyph": "Z"
        },
        {
          "camera": "C3",
          "minute": 18,
          "channel": "VERIFIED",
          "glyph": "X"
        },
        {
          "camera": "C2",
          "minute": 16,
          "channel": "VERIFIED",
          "glyph": "C"
        },
        {
          "camera": "C1",
          "minute": 14,
          "channel": "VERIFIED",
          "glyph": "F"
        },
        {
          "camera": "C5",
          "minute": 16,
          "channel": "VERIFIED",
          "glyph": "K"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 07",
      "intro": "Quarantined channel: NOISE. Verified channel: VERIFIED. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "NOISE",
      "valid": "VERIFIED",
      "calibration": [
        {
          "camera": "C2",
          "offset": -5
        },
        {
          "camera": "C3",
          "offset": 4
        },
        {
          "camera": "C1",
          "offset": 4
        },
        {
          "camera": "C4",
          "offset": 4
        },
        {
          "camera": "C5",
          "offset": -2
        }
      ],
      "samples": [
        {
          "sector": "EAST",
          "batch": "BATCH-33",
          "a": 1,
          "b": 2
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-33",
          "a": 5,
          "b": 5
        },
        {
          "sector": "EAST",
          "batch": "BATCH-65",
          "a": 8,
          "b": 1
        },
        {
          "sector": "WEST",
          "batch": "BATCH-65",
          "a": 2,
          "b": 1
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-33",
          "a": 8,
          "b": 1
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-65",
          "a": 8,
          "b": 7
        },
        {
          "sector": "WEST",
          "batch": "BATCH-33",
          "a": 7,
          "b": 8
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-65",
          "a": 7,
          "b": 7
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory",
          "classified"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the absolute difference between A and B and write those four digits in route order. Then append the single-letter TRACK MARKER from the secret /classified annex mentioned in the Registry margin.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "/classified",
    "addon": null,
    "evidenceTitle": "Wolf Signature / recovery evidence",
    "evidence": "Some instincts always know who belongs beside you."
  },
  {
    "id": 8,
    "date": "Dec 7",
    "title": "Smile Vector Analysis",
    "tag": "BIOMETRIC EXCEPTION",
    "story": "A classified biometric scan registered an unexplainable change in a handler’s vital signs. The camera clocks may explain when it happened.",
    "lead": "The signal spikes whenever a certain smile enters a frame. Investigators remain bewildered.",
    "emotion": "There are smiles you cannot help but remember.",
    "message": "626 smile very big. Federation says not the same.",
    "dispatch": {
      "title": "Dispatch intercept // incident 08",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-82. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-08-4",
          "caller": "INFORMANT",
          "level": 5,
          "seal": "COMET"
        },
        {
          "id": "TX-08-3",
          "caller": "FEDERATION",
          "level": 6,
          "seal": "PRISM"
        },
        {
          "id": "TX-08-5",
          "caller": "SMILE",
          "level": 8,
          "seal": "COMET"
        },
        {
          "id": "TX-08-2",
          "caller": "SMILE",
          "level": 7,
          "seal": "FLARE"
        },
        {
          "id": "TX-08-1",
          "caller": "SMILE",
          "level": 6,
          "seal": "VISTA"
        }
      ],
      "batch": "BATCH-82"
    },
    "registry": {
      "title": "Personnel Registry // verification 08",
      "intro": "Authentic callsign: SMILE. Required clearance: 6. Seal orientation protocol: MIRROR (reverse all letters). Four-sector keypad route: EAST → WEST → SOUTH → NORTH. Camera reel read direction: LATEST TO EARLIEST.",
      "caller": "SMILE",
      "clearance": 6,
      "mirror": true,
      "order": [
        "EAST",
        "WEST",
        "SOUTH",
        "NORTH"
      ],
      "reel": "REVERSE",
      "note": "Cross-check the lab specimens before applying the door keypad order."
    },
    "surveillance": {
      "title": "Camera wall // reel 08",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C1",
          "minute": 15,
          "channel": "CLEAR",
          "glyph": "Y"
        },
        {
          "camera": "C2",
          "minute": 16,
          "channel": "CLEAR",
          "glyph": "Q"
        },
        {
          "camera": "C3",
          "minute": 24,
          "channel": "CLEAR",
          "glyph": "R"
        },
        {
          "camera": "C5",
          "minute": 19,
          "channel": "DARK",
          "glyph": "Q"
        },
        {
          "camera": "C4",
          "minute": 11,
          "channel": "CLEAR",
          "glyph": "J"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 08",
      "intro": "Quarantined channel: DARK. Verified channel: CLEAR. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "DARK",
      "valid": "CLEAR",
      "calibration": [
        {
          "camera": "C4",
          "offset": 3
        },
        {
          "camera": "C3",
          "offset": -2
        },
        {
          "camera": "C5",
          "offset": -3
        },
        {
          "camera": "C2",
          "offset": 2
        },
        {
          "camera": "C1",
          "offset": -4
        }
      ],
      "samples": [
        {
          "sector": "NORTH",
          "batch": "BATCH-82",
          "a": 4,
          "b": 5
        },
        {
          "sector": "EAST",
          "batch": "BATCH-82",
          "a": 6,
          "b": 4
        },
        {
          "sector": "WEST",
          "batch": "BATCH-82",
          "a": 7,
          "b": 2
        },
        {
          "sector": "EAST",
          "batch": "BATCH-64",
          "a": 2,
          "b": 5
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-64",
          "a": 6,
          "b": 7
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-82",
          "a": 6,
          "b": 4
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-64",
          "a": 8,
          "b": 2
        },
        {
          "sector": "WEST",
          "batch": "BATCH-64",
          "a": 7,
          "b": 2
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the LAST digit of A+B and write those four digits in route order. Then visit the Laboratory side exhibit (labeled Smile-vector exception table). Append the letter of the only cleared sample.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "",
    "addon": {
      "room": "laboratory",
      "title": "Smile-vector exception table",
      "text": "Only a sample with total brightness greater than 10 AND symmetry at least 5 is cleared. One record passes both conditions.",
      "lines": [
        "SAMPLE A : brightness 4 + 3  | symmetry 5",
        "SAMPLE B : brightness 8 + 5  | symmetry 6",
        "SAMPLE C : brightness 7 + 2  | symmetry 4"
      ],
      "instruction": "Append the letter of the only cleared sample."
    },
    "evidenceTitle": "Smile Vector Analysis / recovery evidence",
    "evidence": "There are smiles you cannot help but remember."
  },
  {
    "id": 9,
    "date": "Dec 8",
    "title": "First Contact: Hi",
    "tag": "DIALOGUE RECONSTRUCTION",
    "story": "An unremarkable two-letter greeting seems to have triggered a chain of events. The voice recordings have been cut out of order.",
    "lead": "The first word mattered before anybody knew how much.",
    "emotion": "Sometimes the smallest hello changes everything.",
    "message": "626 says HI with all four arms. Still just two letters.",
    "dispatch": {
      "title": "Dispatch intercept // incident 09",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-99. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-09-3",
          "caller": "WATCHDOG",
          "level": 7,
          "seal": "VISTA"
        },
        {
          "id": "TX-09-2",
          "caller": "HELLO",
          "level": 8,
          "seal": "NEXUS"
        },
        {
          "id": "TX-09-5",
          "caller": "HELLO",
          "level": 9,
          "seal": "ORBIT"
        },
        {
          "id": "TX-09-1",
          "caller": "HELLO",
          "level": 7,
          "seal": "ECHO"
        },
        {
          "id": "TX-09-4",
          "caller": "ARCHIVIST",
          "level": 6,
          "seal": "ECHO"
        }
      ],
      "batch": "BATCH-99"
    },
    "registry": {
      "title": "Personnel Registry // verification 09",
      "intro": "Authentic callsign: HELLO. Required clearance: 7. Seal orientation protocol: MIRROR (reverse all letters). Four-sector keypad route: SOUTH → EAST → WEST → NORTH. Camera reel read direction: EARLIEST TO LATEST.",
      "caller": "HELLO",
      "clearance": 7,
      "mirror": true,
      "order": [
        "SOUTH",
        "EAST",
        "WEST",
        "NORTH"
      ],
      "reel": "FORWARD",
      "note": "Cross-check the lab specimens before applying the door keypad order."
    },
    "surveillance": {
      "title": "Camera wall // reel 09",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C4",
          "minute": 19,
          "channel": "STATIC",
          "glyph": "X"
        },
        {
          "camera": "C5",
          "minute": 15,
          "channel": "ECHO",
          "glyph": "Q"
        },
        {
          "camera": "C1",
          "minute": 13,
          "channel": "ECHO",
          "glyph": "D"
        },
        {
          "camera": "C3",
          "minute": 27,
          "channel": "ECHO",
          "glyph": "S"
        },
        {
          "camera": "C2",
          "minute": 6,
          "channel": "ECHO",
          "glyph": "E"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 09",
      "intro": "Quarantined channel: STATIC. Verified channel: ECHO. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "STATIC",
      "valid": "ECHO",
      "calibration": [
        {
          "camera": "C1",
          "offset": 5
        },
        {
          "camera": "C2",
          "offset": 5
        },
        {
          "camera": "C4",
          "offset": -3
        },
        {
          "camera": "C3",
          "offset": -5
        },
        {
          "camera": "C5",
          "offset": -1
        }
      ],
      "samples": [
        {
          "sector": "EAST",
          "batch": "BATCH-15",
          "a": 3,
          "b": 7
        },
        {
          "sector": "WEST",
          "batch": "BATCH-15",
          "a": 1,
          "b": 4
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-15",
          "a": 3,
          "b": 7
        },
        {
          "sector": "EAST",
          "batch": "BATCH-99",
          "a": 8,
          "b": 3
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-99",
          "a": 2,
          "b": 1
        },
        {
          "sector": "WEST",
          "batch": "BATCH-99",
          "a": 6,
          "b": 6
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-15",
          "a": 2,
          "b": 6
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-99",
          "a": 5,
          "b": 6
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory",
          "surveillance"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the LAST digit of A×B and write those four digits in route order. Then visit the Surveillance side exhibit (labeled First-contact transcript fragments). Find the earliest word spoken and append its first letter.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "",
    "addon": {
      "room": "surveillance",
      "title": "First-contact transcript fragments",
      "text": "The voice transcript is stored out of order. Every speaker label was preserved, but only the first spoken word is important.",
      "lines": [
        "08:16 • BELLA • Good",
        "08:14 • WYATT • Hey",
        "08:13 • BELLA • Hi",
        "08:15 • WYATT • How are you"
      ],
      "instruction": "Find the earliest word spoken and append its first letter."
    },
    "evidenceTitle": "First Contact: First Contact: Hi",
    "evidence": "Sometimes the smallest hello changes everything."
  },
  {
    "id": 10,
    "date": "Dec 9",
    "title": "Stayed When It Was Hard",
    "tag": "RELIABILITY HEARING",
    "story": "A communications blackout produced contradictory signals. The Registry has a way to identify the transmission that never disconnected.",
    "lead": "One person stayed even when things could have fallen apart.",
    "emotion": "Being there can say more than a thousand perfect speeches.",
    "message": "626 loyal. 626 also glued to chair. Not related.",
    "dispatch": {
      "title": "Dispatch intercept // incident 10",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-26. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-10-3",
          "caller": "WATCHDOG",
          "level": 4,
          "seal": "FLARE"
        },
        {
          "id": "TX-10-2",
          "caller": "STAY",
          "level": 5,
          "seal": "CROWN"
        },
        {
          "id": "TX-10-4",
          "caller": "SCANNER",
          "level": 3,
          "seal": "PRISM"
        },
        {
          "id": "TX-10-1",
          "caller": "STAY",
          "level": 4,
          "seal": "PRISM"
        },
        {
          "id": "TX-10-5",
          "caller": "STAY",
          "level": 6,
          "seal": "ECHO"
        }
      ],
      "batch": "BATCH-26"
    },
    "registry": {
      "title": "Personnel Registry // verification 10",
      "intro": "Authentic callsign: STAY. Required clearance: 4. Seal orientation protocol: MIRROR (reverse all letters). Four-sector keypad route: SOUTH → NORTH → WEST → EAST. Camera reel read direction: EARLIEST TO LATEST.",
      "caller": "STAY",
      "clearance": 4,
      "mirror": true,
      "order": [
        "SOUTH",
        "NORTH",
        "WEST",
        "EAST"
      ],
      "reel": "FORWARD",
      "note": "Cross-check the lab specimens before applying the door keypad order."
    },
    "surveillance": {
      "title": "Camera wall // reel 10",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C1",
          "minute": 12,
          "channel": "COBALT",
          "glyph": "X"
        },
        {
          "camera": "C4",
          "minute": 12,
          "channel": "GHOST",
          "glyph": "Z"
        },
        {
          "camera": "C3",
          "minute": 15,
          "channel": "COBALT",
          "glyph": "V"
        },
        {
          "camera": "C2",
          "minute": 27,
          "channel": "COBALT",
          "glyph": "T"
        },
        {
          "camera": "C5",
          "minute": 9,
          "channel": "COBALT",
          "glyph": "U"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 10",
      "intro": "Quarantined channel: GHOST. Verified channel: COBALT. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "GHOST",
      "valid": "COBALT",
      "calibration": [
        {
          "camera": "C4",
          "offset": 4
        },
        {
          "camera": "C2",
          "offset": -5
        },
        {
          "camera": "C5",
          "offset": 2
        },
        {
          "camera": "C3",
          "offset": 3
        },
        {
          "camera": "C1",
          "offset": 2
        }
      ],
      "samples": [
        {
          "sector": "EAST",
          "batch": "BATCH-46",
          "a": 3,
          "b": 1
        },
        {
          "sector": "WEST",
          "batch": "BATCH-26",
          "a": 4,
          "b": 1
        },
        {
          "sector": "WEST",
          "batch": "BATCH-46",
          "a": 5,
          "b": 8
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-26",
          "a": 8,
          "b": 3
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-26",
          "a": 8,
          "b": 7
        },
        {
          "sector": "EAST",
          "batch": "BATCH-26",
          "a": 2,
          "b": 5
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-46",
          "a": 5,
          "b": 3
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-46",
          "a": 7,
          "b": 7
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the absolute difference between A and B and write those four digits in route order. Then visit the Dispatch side exhibit (labeled Retention reliability log). Reconstruct the true signal and append its last letter.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "",
    "addon": {
      "room": "dispatch",
      "title": "Retention reliability log",
      "text": "The Federation marked clearance-1 reports as decoys. Only clearance-4 messages belong to the real signal. Read valid characters in time order.",
      "lines": [
        "03:30 | CLEARANCE 4 | Y",
        "01:45 | CLEARANCE 1 | X",
        "03:00 | CLEARANCE 4 | A",
        "02:00 | CLEARANCE 4 | S",
        "02:30 | CLEARANCE 4 | T"
      ],
      "instruction": "Reconstruct the true signal and append its last letter."
    },
    "evidenceTitle": "Stayed When It Was Hard / recovery evidence",
    "evidence": "Being there can say more than a thousand perfect speeches."
  },
  {
    "id": 11,
    "date": "Dec 10",
    "title": "Family Classification",
    "tag": "BOND INDEX",
    "story": "Federation analysts cannot assign a relationship code. The trail leads to an old index hidden in the OHANA archive.",
    "lead": "Chosen, stayed, belonged: three states the Federation cannot fit in a neat little box.",
    "emotion": "Family can be something you build by choosing each other.",
    "message": "626 says OHANA is a very important database field.",
    "dispatch": {
      "title": "Dispatch intercept // incident 11",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-43. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-11-1",
          "caller": "OHANA",
          "level": 9,
          "seal": "SOLAR"
        },
        {
          "id": "TX-11-2",
          "caller": "OHANA",
          "level": 10,
          "seal": "NORTH"
        },
        {
          "id": "TX-11-3",
          "caller": "WATCHDOG",
          "level": 9,
          "seal": "CROWN"
        },
        {
          "id": "TX-11-4",
          "caller": "FEDERATION",
          "level": 8,
          "seal": "UNION"
        },
        {
          "id": "TX-11-5",
          "caller": "OHANA",
          "level": 11,
          "seal": "STARS"
        }
      ],
      "batch": "BATCH-43"
    },
    "registry": {
      "title": "Personnel Registry // verification 11",
      "intro": "Authentic callsign: OHANA. Required clearance: 9. Seal orientation protocol: NORMAL (keep letter order). Four-sector keypad route: EAST → NORTH → SOUTH → WEST. Camera reel read direction: EARLIEST TO LATEST.",
      "caller": "OHANA",
      "clearance": 9,
      "mirror": false,
      "order": [
        "EAST",
        "NORTH",
        "SOUTH",
        "WEST"
      ],
      "reel": "FORWARD",
      "note": "A torn seal names /archive/ohana. The index is not in the public files."
    },
    "surveillance": {
      "title": "Camera wall // reel 11",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C2",
          "minute": 8,
          "channel": "SAFE",
          "glyph": "L"
        },
        {
          "camera": "C3",
          "minute": 14,
          "channel": "SPOOF",
          "glyph": "Q"
        },
        {
          "camera": "C4",
          "minute": 17,
          "channel": "SAFE",
          "glyph": "B"
        },
        {
          "camera": "C1",
          "minute": 19,
          "channel": "SAFE",
          "glyph": "M"
        },
        {
          "camera": "C5",
          "minute": 15,
          "channel": "SAFE",
          "glyph": "R"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 11",
      "intro": "Quarantined channel: SPOOF. Verified channel: SAFE. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "SPOOF",
      "valid": "SAFE",
      "calibration": [
        {
          "camera": "C5",
          "offset": 3
        },
        {
          "camera": "C3",
          "offset": 2
        },
        {
          "camera": "C4",
          "offset": 5
        },
        {
          "camera": "C1",
          "offset": -5
        },
        {
          "camera": "C2",
          "offset": 3
        }
      ],
      "samples": [
        {
          "sector": "SOUTH",
          "batch": "BATCH-43",
          "a": 5,
          "b": 1
        },
        {
          "sector": "WEST",
          "batch": "BATCH-43",
          "a": 8,
          "b": 1
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-43",
          "a": 7,
          "b": 2
        },
        {
          "sector": "EAST",
          "batch": "BATCH-43",
          "a": 7,
          "b": 5
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-77",
          "a": 2,
          "b": 7
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-77",
          "a": 3,
          "b": 4
        },
        {
          "sector": "EAST",
          "batch": "BATCH-77",
          "a": 3,
          "b": 2
        },
        {
          "sector": "WEST",
          "batch": "BATCH-77",
          "a": 1,
          "b": 4
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory",
          "ohana"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the LAST digit of A+B and write those four digits in route order. Then append the first character of the status word from the /archive/ohana annex.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "/archive/ohana",
    "addon": null,
    "evidenceTitle": "Family Classification / recovery evidence",
    "evidence": "Family can be something you build by choosing each other."
  },
  {
    "id": 12,
    "date": "Dec 11",
    "title": "Lion King Echoes",
    "tag": "CIRCLE SCANNER",
    "story": "An old cultural file describes a sunrise, a lion-shaped shadow, and a return to somewhere safe. Its chronology is wrong.",
    "lead": "The same symbol keeps repeating: a circle, a pride, a place to come home.",
    "emotion": "Some stories teach us where home really is.",
    "message": "626 tried roaring. Roar sounds suspiciously like a sneeze.",
    "dispatch": {
      "title": "Dispatch intercept // incident 12",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-60. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-12-5",
          "caller": "LION",
          "level": 7,
          "seal": "PRISM"
        },
        {
          "id": "TX-12-3",
          "caller": "FEDERATION",
          "level": 5,
          "seal": "NEXUS"
        },
        {
          "id": "TX-12-1",
          "caller": "LION",
          "level": 5,
          "seal": "COMET"
        },
        {
          "id": "TX-12-2",
          "caller": "LION",
          "level": 6,
          "seal": "FLARE"
        },
        {
          "id": "TX-12-4",
          "caller": "FEDERATION",
          "level": 4,
          "seal": "COMET"
        }
      ],
      "batch": "BATCH-60"
    },
    "registry": {
      "title": "Personnel Registry // verification 12",
      "intro": "Authentic callsign: LION. Required clearance: 5. Seal orientation protocol: MIRROR (reverse all letters). Four-sector keypad route: WEST → EAST → NORTH → SOUTH. Camera reel read direction: LATEST TO EARLIEST.",
      "caller": "LION",
      "clearance": 5,
      "mirror": true,
      "order": [
        "WEST",
        "EAST",
        "NORTH",
        "SOUTH"
      ],
      "reel": "REVERSE",
      "note": "Cross-check the lab specimens before applying the door keypad order."
    },
    "surveillance": {
      "title": "Camera wall // reel 12",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C3",
          "minute": 13,
          "channel": "VERIFIED",
          "glyph": "Q"
        },
        {
          "camera": "C5",
          "minute": 18,
          "channel": "VERIFIED",
          "glyph": "G"
        },
        {
          "camera": "C2",
          "minute": 18,
          "channel": "VERIFIED",
          "glyph": "W"
        },
        {
          "camera": "C1",
          "minute": 21,
          "channel": "VERIFIED",
          "glyph": "Z"
        },
        {
          "camera": "C4",
          "minute": 19,
          "channel": "NOISE",
          "glyph": "Z"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 12",
      "intro": "Quarantined channel: NOISE. Verified channel: VERIFIED. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "NOISE",
      "valid": "VERIFIED",
      "calibration": [
        {
          "camera": "C4",
          "offset": -3
        },
        {
          "camera": "C3",
          "offset": -2
        },
        {
          "camera": "C5",
          "offset": 4
        },
        {
          "camera": "C1",
          "offset": -3
        },
        {
          "camera": "C2",
          "offset": -4
        }
      ],
      "samples": [
        {
          "sector": "SOUTH",
          "batch": "BATCH-60",
          "a": 5,
          "b": 7
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-28",
          "a": 3,
          "b": 8
        },
        {
          "sector": "WEST",
          "batch": "BATCH-60",
          "a": 6,
          "b": 6
        },
        {
          "sector": "EAST",
          "batch": "BATCH-60",
          "a": 4,
          "b": 5
        },
        {
          "sector": "EAST",
          "batch": "BATCH-28",
          "a": 5,
          "b": 5
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-28",
          "a": 7,
          "b": 7
        },
        {
          "sector": "WEST",
          "batch": "BATCH-28",
          "a": 6,
          "b": 6
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-60",
          "a": 7,
          "b": 4
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the LAST digit of A×B and write those four digits in route order. Then visit the Registry side exhibit (labeled Circle-of-day cultural file). Append the code letter on the earliest scene.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "",
    "addon": {
      "room": "registry",
      "title": "Circle-of-day cultural file",
      "text": "Each scene has a letter marker. The file is not in chronological order. Its earliest scene matters.",
      "lines": [
        "DUSK      • code Q",
        "AFTERNOON • code N",
        "SUNRISE   • code D",
        "NOON      • code T"
      ],
      "instruction": "Append the code letter on the earliest scene."
    },
    "evidenceTitle": "Lion King Echoes / recovery evidence",
    "evidence": "Some stories teach us where home really is."
  },
  {
    "id": 13,
    "date": "Dec 12",
    "title": "Halloween Residue",
    "tag": "COSTUME TRACK",
    "story": "A costume database contains duplicates, false badges, and one genuine late-night sighting. A trail of timestamps must be restored.",
    "lead": "Halloween leaves behind more than costumes: sometimes it leaves a memory nobody forgets.",
    "emotion": "The most important part of a night is who shared it.",
    "message": "626 wore disguise. Disguise was more blue.",
    "dispatch": {
      "title": "Dispatch intercept // incident 13",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-77. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-13-1",
          "caller": "GHOST",
          "level": 7,
          "seal": "GLINT"
        },
        {
          "id": "TX-13-2",
          "caller": "GHOST",
          "level": 8,
          "seal": "SOLAR"
        },
        {
          "id": "TX-13-5",
          "caller": "GHOST",
          "level": 9,
          "seal": "PRISM"
        },
        {
          "id": "TX-13-4",
          "caller": "SCANNER",
          "level": 6,
          "seal": "SOLAR"
        },
        {
          "id": "TX-13-3",
          "caller": "ARCHIVIST",
          "level": 7,
          "seal": "SOLAR"
        }
      ],
      "batch": "BATCH-77"
    },
    "registry": {
      "title": "Personnel Registry // verification 13",
      "intro": "Authentic callsign: GHOST. Required clearance: 7. Seal orientation protocol: MIRROR (reverse all letters). Four-sector keypad route: SOUTH → WEST → EAST → NORTH. Camera reel read direction: EARLIEST TO LATEST.",
      "caller": "GHOST",
      "clearance": 7,
      "mirror": true,
      "order": [
        "SOUTH",
        "WEST",
        "EAST",
        "NORTH"
      ],
      "reel": "FORWARD",
      "note": "Cross-check the lab specimens before applying the door keypad order."
    },
    "surveillance": {
      "title": "Camera wall // reel 13",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C2",
          "minute": 20,
          "channel": "CLEAR",
          "glyph": "P"
        },
        {
          "camera": "C4",
          "minute": 10,
          "channel": "CLEAR",
          "glyph": "K"
        },
        {
          "camera": "C3",
          "minute": 13,
          "channel": "CLEAR",
          "glyph": "V"
        },
        {
          "camera": "C5",
          "minute": 11,
          "channel": "DARK",
          "glyph": "X"
        },
        {
          "camera": "C1",
          "minute": 19,
          "channel": "CLEAR",
          "glyph": "A"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 13",
      "intro": "Quarantined channel: DARK. Verified channel: CLEAR. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "DARK",
      "valid": "CLEAR",
      "calibration": [
        {
          "camera": "C5",
          "offset": 5
        },
        {
          "camera": "C4",
          "offset": 4
        },
        {
          "camera": "C2",
          "offset": -2
        },
        {
          "camera": "C1",
          "offset": 3
        },
        {
          "camera": "C3",
          "offset": -2
        }
      ],
      "samples": [
        {
          "sector": "EAST",
          "batch": "BATCH-59",
          "a": 7,
          "b": 3
        },
        {
          "sector": "WEST",
          "batch": "BATCH-59",
          "a": 1,
          "b": 4
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-59",
          "a": 7,
          "b": 5
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-59",
          "a": 7,
          "b": 2
        },
        {
          "sector": "WEST",
          "batch": "BATCH-77",
          "a": 7,
          "b": 4
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-77",
          "a": 2,
          "b": 4
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-77",
          "a": 8,
          "b": 3
        },
        {
          "sector": "EAST",
          "batch": "BATCH-77",
          "a": 5,
          "b": 4
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the absolute difference between A and B and write those four digits in route order. Then visit the Registry side exhibit (labeled Halloween costume audit). Identify the unique matching costume and append its first letter.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "",
    "addon": {
      "room": "registry",
      "title": "Halloween costume audit",
      "text": "The genuine costume has a blue wristband, a paper moon and no cape. The four candidate reports contain decoys.",
      "lines": [
        "GHOST: blue wristband | paper moon | no cape",
        "VAMPIRE: blue wristband | paper moon | cape",
        "WOLF: blue wristband | no moon | no cape",
        "PHANTOM: red wristband | paper moon | no cape"
      ],
      "instruction": "Identify the unique matching costume and append its first letter."
    },
    "evidenceTitle": "Halloween Residue / recovery evidence",
    "evidence": "The most important part of a night is who shared it."
  },
  {
    "id": 14,
    "date": "Dec 13",
    "title": "Artifact Triangulation",
    "tag": "SIGNAL INTERSECTION",
    "story": "Three scanners disagree about the object’s location. An old registry procedure may explain how to trace the real coordinates.",
    "lead": "The artifact is close. The Federation’s certainty is not.",
    "emotion": "The last turn is usually harder than the first.",
    "message": "626 has map upside down. Up is new down.",
    "dispatch": {
      "title": "Dispatch intercept // incident 14",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-94. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-14-4",
          "caller": "WATCHDOG",
          "level": 7,
          "seal": "VISTA"
        },
        {
          "id": "TX-14-5",
          "caller": "GRID",
          "level": 10,
          "seal": "STARS"
        },
        {
          "id": "TX-14-1",
          "caller": "GRID",
          "level": 8,
          "seal": "FLARE"
        },
        {
          "id": "TX-14-3",
          "caller": "INFORMANT",
          "level": 8,
          "seal": "UNION"
        },
        {
          "id": "TX-14-2",
          "caller": "GRID",
          "level": 9,
          "seal": "FLARE"
        }
      ],
      "batch": "BATCH-94"
    },
    "registry": {
      "title": "Personnel Registry // verification 14",
      "intro": "Authentic callsign: GRID. Required clearance: 8. Seal orientation protocol: MIRROR (reverse all letters). Four-sector keypad route: SOUTH → NORTH → WEST → EAST. Camera reel read direction: EARLIEST TO LATEST.",
      "caller": "GRID",
      "clearance": 8,
      "mirror": true,
      "order": [
        "SOUTH",
        "NORTH",
        "WEST",
        "EAST"
      ],
      "reel": "FORWARD",
      "note": "Cross-check the lab specimens before applying the door keypad order."
    },
    "surveillance": {
      "title": "Camera wall // reel 14",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C4",
          "minute": 24,
          "channel": "ECHO",
          "glyph": "E"
        },
        {
          "camera": "C5",
          "minute": 13,
          "channel": "ECHO",
          "glyph": "K"
        },
        {
          "camera": "C3",
          "minute": 20,
          "channel": "STATIC",
          "glyph": "Z"
        },
        {
          "camera": "C1",
          "minute": 12,
          "channel": "ECHO",
          "glyph": "L"
        },
        {
          "camera": "C2",
          "minute": 16,
          "channel": "ECHO",
          "glyph": "R"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 14",
      "intro": "Quarantined channel: STATIC. Verified channel: ECHO. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "STATIC",
      "valid": "ECHO",
      "calibration": [
        {
          "camera": "C5",
          "offset": -2
        },
        {
          "camera": "C2",
          "offset": 2
        },
        {
          "camera": "C3",
          "offset": -4
        },
        {
          "camera": "C4",
          "offset": -2
        },
        {
          "camera": "C1",
          "offset": 2
        }
      ],
      "samples": [
        {
          "sector": "SOUTH",
          "batch": "BATCH-94",
          "a": 3,
          "b": 3
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-94",
          "a": 4,
          "b": 2
        },
        {
          "sector": "EAST",
          "batch": "BATCH-10",
          "a": 1,
          "b": 4
        },
        {
          "sector": "WEST",
          "batch": "BATCH-10",
          "a": 6,
          "b": 4
        },
        {
          "sector": "WEST",
          "batch": "BATCH-94",
          "a": 6,
          "b": 6
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-10",
          "a": 8,
          "b": 8
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-10",
          "a": 4,
          "b": 3
        },
        {
          "sector": "EAST",
          "batch": "BATCH-94",
          "a": 6,
          "b": 1
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the LAST digit of A+B and write those four digits in route order. Then visit the Laboratory side exhibit (labeled Scanner triangulation board). Append the verified XY coordinate pair without punctuation.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "",
    "addon": {
      "room": "laboratory",
      "title": "Scanner triangulation board",
      "text": "Two verified scanners report one coordinate each. A noisy scanner gives contradictory information. Read the verified pair as X followed by Y.",
      "lines": [
        "VERIFIED SCANNER A: X = 4",
        "VERIFIED SCANNER B: Y = 2",
        "UNVERIFIED SCANNER C: X = 7"
      ],
      "instruction": "Append the verified XY coordinate pair without punctuation."
    },
    "evidenceTitle": "Artifact Triangulation / recovery evidence",
    "evidence": "The last turn is usually harder than the first."
  },
  {
    "id": 15,
    "date": "Dec 14",
    "title": "Final Retrieval Window",
    "tag": "FINAL SECURITY GAUNTLET",
    "story": "The retrieval vault is within reach. All the old case stamps can now be examined together. This final door has three independent systems.",
    "lead": "The evidence has followed the same thread for fifteen days. One more door stands between Agent Bunny and the truth.",
    "emotion": "What mattered was never lost.",
    "message": "626 definitely know secret. 626 definitely not allowed to say secret.",
    "dispatch": {
      "title": "Dispatch intercept // incident 15",
      "intro": "The genuine transmission is the only row that matches BOTH the verified callsign and clearance from Personnel Registry. Batch in circulation: BATCH-21. The seal field is intact; the sender field may be spoofed.",
      "rows": [
        {
          "id": "TX-15-3",
          "caller": "SCANNER",
          "level": 10,
          "seal": "STARS"
        },
        {
          "id": "TX-15-2",
          "caller": "RECOVERY",
          "level": 11,
          "seal": "TRACE"
        },
        {
          "id": "TX-15-4",
          "caller": "WATCHDOG",
          "level": 9,
          "seal": "FLARE"
        },
        {
          "id": "TX-15-5",
          "caller": "RECOVERY",
          "level": 12,
          "seal": "SOLAR"
        },
        {
          "id": "TX-15-1",
          "caller": "RECOVERY",
          "level": 10,
          "seal": "UNION"
        }
      ],
      "batch": "BATCH-21"
    },
    "registry": {
      "title": "Personnel Registry // verification 15",
      "intro": "Authentic callsign: RECOVERY. Required clearance: 10. Seal orientation protocol: NORMAL (keep letter order). Four-sector keypad route: SOUTH → EAST → NORTH → WEST. Camera reel read direction: EARLIEST TO LATEST.",
      "caller": "RECOVERY",
      "clearance": 10,
      "mirror": false,
      "order": [
        "SOUTH",
        "EAST",
        "NORTH",
        "WEST"
      ],
      "reel": "FORWARD",
      "note": "Compare stamps from Days 1, 7, and 14 on the Board."
    },
    "surveillance": {
      "title": "Camera wall // reel 15",
      "intro": "All five video frames are deliberately out of sequence. The frame clock is WRONG by its personal camera offset. Use the calibration ledger in Laboratory. Reject the quarantined channel before reading the enhanced glyphs.",
      "frames": [
        {
          "camera": "C1",
          "minute": 16,
          "channel": "COBALT",
          "glyph": "W"
        },
        {
          "camera": "C3",
          "minute": 9,
          "channel": "COBALT",
          "glyph": "G"
        },
        {
          "camera": "C5",
          "minute": 27,
          "channel": "COBALT",
          "glyph": "A"
        },
        {
          "camera": "C2",
          "minute": 12,
          "channel": "GHOST",
          "glyph": "X"
        },
        {
          "camera": "C4",
          "minute": 13,
          "channel": "COBALT",
          "glyph": "C"
        }
      ]
    },
    "laboratory": {
      "title": "Spectral analysis // sample 15",
      "intro": "Quarantined channel: GHOST. Verified channel: COBALT. Camera correction is ADDED to each recorded minute to get actual time. Scan all specimen rows; only the dispatch-approved batch is authentic.",
      "blocked": "GHOST",
      "valid": "COBALT",
      "calibration": [
        {
          "camera": "C2",
          "offset": 4
        },
        {
          "camera": "C5",
          "offset": -5
        },
        {
          "camera": "C1",
          "offset": -2
        },
        {
          "camera": "C4",
          "offset": 5
        },
        {
          "camera": "C3",
          "offset": 2
        }
      ],
      "samples": [
        {
          "sector": "SOUTH",
          "batch": "BATCH-41",
          "a": 5,
          "b": 4
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-21",
          "a": 3,
          "b": 5
        },
        {
          "sector": "EAST",
          "batch": "BATCH-21",
          "a": 8,
          "b": 3
        },
        {
          "sector": "EAST",
          "batch": "BATCH-41",
          "a": 3,
          "b": 4
        },
        {
          "sector": "NORTH",
          "batch": "BATCH-41",
          "a": 8,
          "b": 4
        },
        {
          "sector": "WEST",
          "batch": "BATCH-41",
          "a": 6,
          "b": 1
        },
        {
          "sector": "SOUTH",
          "batch": "BATCH-21",
          "a": 6,
          "b": 3
        },
        {
          "sector": "WEST",
          "batch": "BATCH-21",
          "a": 7,
          "b": 5
        }
      ]
    },
    "doors": [
      {
        "title": "Door A · Authentication badge",
        "sources": [
          "dispatch",
          "registry"
        ],
        "prompt": "Match BOTH the authentic callsign and clearance level in Personnel Registry against the Dispatch intercept table. Take the seal from the only matching transmission. Apply the seal orientation protocol printed in Registry. Enter the resulting letters.",
        "format": "5-letter badge"
      },
      {
        "title": "Door B · Surveillance timeline",
        "sources": [
          "surveillance",
          "laboratory",
          "registry"
        ],
        "prompt": "Visit Surveillance and enhance its five frames. In Laboratory, locate the quarantined channel and five camera clock corrections. Reject the quarantined frame; ADD each correction to its camera minute. Sort the remaining four frames using the reel direction in Personnel Registry. Enter their glyphs in that order.",
        "format": "4-character filmstrip"
      },
      {
        "title": "Door C · Power conduit",
        "sources": [
          "dispatch",
          "registry",
          "laboratory",
          "board"
        ],
        "prompt": "Find the approved BATCH in Dispatch. In Laboratory, keep only the four specimen rows from that batch. Follow the sector route printed in Personnel Registry. For each sector, calculate the LAST digit of A×B and write those four digits in route order. Then visit the Investigation Board. Convert stamps from Days 1, 7 and 14 to A=1..Z=26; add the three values; append that total.",
        "format": "4-digit power code + annex marker"
      }
    ],
    "hidden": "",
    "addon": null,
    "evidenceTitle": "Final Retrieval Window / recovery evidence",
    "evidence": "What mattered was never lost."
  }
];
