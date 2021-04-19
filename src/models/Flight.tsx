export interface Flight {
    "lastUpdatedAt": Date,
    "actualLandingTime": Date,
    "actualOffBlockTime": Date,
    "aircraftRegistration": string,
    "aircraftType": {
        "iataMain": string,
        "iataSub": string
    },
    "baggageClaim": {
        "belts": Array<string>
    },
    "checkinAllocations": {
        "checkinAllocations": [
            {
                "endTime": Date,
                "rows": {
                    "rows": [
                        {
                            "position": string,
                            "desks": {
                                "desks": [
                                    {
                                        "checkinClass": {
                                            "code": string,
                                            "description": string
                                        },
                                        "position": number
                                    }
                                ]
                            }
                        }
                    ]
                },
                "startTime": Date
            }
        ],
        "remarks": {
            "remarks": Array<string>
        }
    },
    "codeshares": {
        "codeshares": Array<string>
    },
    "estimatedLandingTime": Date,
    "expectedTimeBoarding": Date,
    "expectedTimeGateClosing": Date,
    "expectedTimeGateOpen": Date,
    "expectedTimeOnBelt": Date,
    "expectedSecurityFilter": string,
    "flightDirection": string,
    "flightName": string,
    "flightNumber": number,
    "gate": string,
    "pier": string,
    "id": string,
    "mainFlight": string,
    "prefixIATA": string,
    "prefixICAO": string,
    "airlineCode": number,
    "publicEstimatedOffBlockTime": Date,
    "publicFlightState": {
        "flightStates": Array<string>
    },
    "route": {
        "destinations": Array<string>
        "eu": string,
        "visa": boolean
    },
    "scheduleDateTime": Date,
    "scheduleDate": string,
    "scheduleTime": string,
    "serviceType": string,
    "terminal": number,
    "transferPositions": {
        "transferPositions": Array<number>
    },
    "schemaVersion": string
}
