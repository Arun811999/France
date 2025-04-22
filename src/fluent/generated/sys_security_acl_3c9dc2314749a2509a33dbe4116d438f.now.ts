import { Acl } from '@servicenow/sdk/core'

export default Acl({
    $id: '3c9dc2314749a2509a33dbe4116d438f',
    script: script`
             `,
    active: true,
    admin_overrides: true,
    decision_type: 'allow',
    description: 'Default access control on x_873877_france_demo_countries',
    local_or_existing: 'Local',
    type: 'record',
    table: 'x_873877_france_demo_countries',
    operation: 'delete',
    roles: ['249d02314749a2509a33dbe4116d43f8'],
})
