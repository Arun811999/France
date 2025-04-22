import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    cs0: {
                        table: 'sys_script_client'
                        id: '9f2d94a3afd746c2907d828690b3f2f6'
                    }
                    src_server_script_js: {
                        table: 'sys_module'
                        id: 'ccf04b9b27e34b02abe5c2ed2ecf911f'
                    }
                    br0: {
                        table: 'sys_script'
                        id: 'fc2453d0be124ac5b1a5dd8c449790aa'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'e0b9bae091c24b00a1c2033c91d6afab'
                    }
                }
                composite: [
                    {
                        table: 'sys_security_acl_role'
                        id: '349dc2314749a2509a33dbe4116d4393'
                        key: {
                            sys_security_acl: '3c9dc2314749a2509a33dbe4116d438f'
                            sys_user_role: '249d02314749a2509a33dbe4116d43f8'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '3c9dc2314749a2509a33dbe4116d4356'
                        key: {
                            sys_security_acl: 'b49dc2314749a2509a33dbe4116d4351'
                            sys_user_role: '249d02314749a2509a33dbe4116d43f8'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '709dc2314749a2509a33dbe4116d438c'
                        key: {
                            sys_security_acl: '789dc2314749a2509a33dbe4116d4388'
                            sys_user_role: '249d02314749a2509a33dbe4116d43f8'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'bc9dc2314749a2509a33dbe4116d4384'
                        key: {
                            sys_security_acl: 'b49dc2314749a2509a33dbe4116d4381'
                            sys_user_role: '249d02314749a2509a33dbe4116d43f8'
                        }
                    },
                ]
            }
        }
    }
}
