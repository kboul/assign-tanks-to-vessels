export const inputLabels = [
    {
        name: 'unimedId',
        label: 'Unimed Id',
        abbreviation: 'UMM ID'
    },
    {
        name: 'cyclinderSerialNumber',
        label: 'Cylinder Serial Number',
        abbreviation: 'Serial Number'
    }
]

export const selectLabels = [
    {
        name: 'cylinderSize',
        label: 'Cylinder Size',
        options: [
            'MOX-40',
            'MOX-10',
            'MOX-5',
            'MOX-2'
        ],
        abbreviation: 'Cylinder Size'
    },
    {
        name: 'origin',
        label: 'Origin',
        options: [
            'US',
            'EU',
            'OTHER'
        ],
        abbreviation: 'Origin'
    },
    {
        name: 'owner',
        label: 'Owner',
        options: [
            'UNIMED',
            'OTHER'
        ],
        abbreviation: 'Owner'
    }
]

export const allLabels = [
    ...inputLabels.map(({ label }) => label),
    ...selectLabels.map(({ label }) => label)
]

export const allLabelsAbbreviation = [
    ...inputLabels.map(({ abbreviation }) => abbreviation),
    ...selectLabels.map(({ abbreviation }) => abbreviation)
]