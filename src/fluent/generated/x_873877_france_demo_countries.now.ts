import { StringColumn, Table } from '@servicenow/sdk/core'

export const x_873877_france_demo_countries = Table({
    name: 'x_873877_france_demo_countries',
    label: 'demo countries',
    allow_web_service_access: true,
    allow_new_fields: false,
    allow_client_scripts: false,
    allow_ui_actions: false,
    extensible: false,
    accessible_from: 'public',
    actions: ['read'],
    schema: {
        number: StringColumn({
            label: 'Number',
            maxLength: 50,
        }),
    },
})
