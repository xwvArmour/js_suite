#!/usr/bin/env node

const fs = require('fs');

let searchTree = (data, value) => {
    for (key of Object.keys(data)) {
        if (key.startsWith(`ou=${value}`)) return key;
        if (data[key].children && Object.keys(data[key].children).length > 0) {
            let children = data[key].children;
            let res = searchTree(children, value);
            if (res) return res;
        }
    }
}
  
let systest0_tree = {
    "ou=domain controllers,dc=systest0,dc=local": {
        "name": "Domain Controllers",
        "children": {
            "ou=systest0-ou0,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou0",
                "children": {}
            },
            "ou=systest0-ou1,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou1",
                "children": {}
            },
            "ou=systest0-ou2,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou2",
                "children": {}
            },
            "ou=systest0-ou3,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou3",
                "children": {}
            },
            "ou=systest0-ou4,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou4",
                "children": {}
            },
            "ou=systest0-ou5,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou5",
                "children": {}
            },
            "ou=systest0-ou6,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou6",
                "children": {}
            },
            "ou=systest0-ou7,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou7",
                "children": {}
            },
            "ou=systest0-ou8,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou8",
                "children": {}
            },
            "ou=systest0-ou9,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou9",
                "children": {}
            },
            "ou=systest0-ou10,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou10",
                "children": {}
            },
            "ou=systest0-ou11,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou11",
                "children": {}
            },
            "ou=systest0-ou12,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou12",
                "children": {}
            },
            "ou=systest0-ou13,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou13",
                "children": {}
            },
            "ou=systest0-ou14,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou14",
                "children": {}
            },
            "ou=systest0-ou15,ou=domain controllers,dc=systest0,dc=local": {
                "name": "systest0-ou15",
                "children": {}
            }
        }
    }
}

let systest1_tree = {
    "ou=domain controllers,dc=systest1,dc=local": {
        "name": "Domain Controllers",
        "children": {
            "ou=systest1-ou0,ou=domain controllers,dc=systest1,dc=local": {
                "name": "systest1-ou0",
                "children": {
                    "ou=systest1-ou1,ou=systest1-ou0,ou=domain controllers,dc=systest1,dc=local": {
                        "name": "systest1-ou1",
                        "children": {
                            "ou=systest1-ou6,ou=systest1-ou1,ou=systest1-ou0,ou=domain controllers,dc=systest1,dc=local": {
                                "name": "systest1-ou6",
                                "children": {}
                            },
                            "ou=systest1-ou7,ou=systest1-ou1,ou=systest1-ou0,ou=domain controllers,dc=systest1,dc=local": {
                                "name": "systest1-ou7",
                                "children": {}
                            },                
                        }
                    },
                    "ou=systest1-ou2,ou=systest1-ou0,ou=domain controllers,dc=systest1,dc=local": {
                        "name": "systest1-ou2",
                        "children": {
                            "ou=systest1-ou8,systest1-ou2,ou=systest1-ou0,ou=domain controllers,dc=systest1,dc=local": {
                                "name": "systest1-ou6",
                                "children": {}
                            },
                            "ou=systest1-ou9,systest1-ou2,ou=systest1-ou0,ou=domain controllers,dc=systest1,dc=local": {
                                "name": "systest1-ou7",
                                "children": {}
                            },                
                        }
                    },
                }
            },
            "ou=systest1-ou3,ou=domain controllers,dc=systest1,dc=local": {
                "name": "systest1-ou3",
                "children": {
                    "ou=systest1-ou4,ou=systest1-ou3,ou=domain controllers,dc=systest1,dc=local": {
                        "name": "systest1-ou4",
                        "children": {
                            "ou=systest1-ou10,systest1-ou4,ou=systest1-ou3,ou=domain controllers,dc=systest1,dc=local": {
                                "name": "systest1-ou10",
                                "children": {}
                            },
                            "ou=systest1-ou11,systest1-ou4,ou=systest1-ou3,ou=domain controllers,dc=systest1,dc=local": {
                                "name": "systest1-ou11",
                                "children": {}
                            }                
                        }
                    },
                    "ou=systest1-ou5,ou=systest1-ou3,ou=domain controllers,dc=systest1,dc=local": {
                        "name": "systest1-ou5",
                        "children": {
                            "ou=systest1-ou12,systest1-ou5,ou=systest1-ou3,ou=domain controllers,dc=systest1,dc=local": {
                                "name": "systest1-ou12",
                                "children": {}
                            },
                            "ou=systest1-ou13,systest1-ou5,ou=systest1-ou3,ou=domain controllers,dc=systest1,dc=local": {
                                "name": "systest1-ou13",
                                "children": {}
                            }                
                        }
                    }
                }
            },
            "ou=systest1-ou14,ou=domain controllers,dc=systest1,dc=local": {
                "name": "systest1-ou14",
                "children": {}
            },
            "ou=systest1-ou15,ou=domain controllers,dc=systest1,dc=local": {
                "name": "systest1-ou15",
                "children": {}
            }
        }
    }
}

let systest2_tree = {
    "ou=domain controllers,dc=systest2,dc=local": {
        "name": "Domain Controllers",
        "children": {
            "ou=systest2-ou0,ou=domain controllers,dc=systest2,dc=local": {
                "name": "systest2-ou0",
                "children": {
                    "ou=systest2-ou1,ou=systest2-ou0,ou=domain controllers,dc=systest2,dc=local": {
                        "name": "systest2-ou1",
                        "children": {
                            "ou=systest2-ou2,ou=systest2-ou1,ou=systest2-ou0,ou=domain controllers,dc=systest2,dc=local": {
                                "name": "systest2-ou2",
                                "children": {
                                    "ou=systest2-ou3,ou=systest2-ou2,ou=systest2-ou1,ou=systest2-ou0,ou=domain controllers,dc=systest2,dc=local": {
                                        "name": "systest2-ou3",
                                        "children": {
                                            "ou=systest2-ou4,ou=systest2-ou3,ou=systest2-ou2,ou=systest2-ou1,ou=systest2-ou0,ou=domain controllers,dc=systest2,dc=local": {
                                                "name": "systest2-ou4",
                                                "children": {
                                                    "ou=systest2-ou5,ou=systest2-ou4,ou=systest2-ou3,ou=systest2-ou2,ou=systest2-ou1,ou=systest2-ou0,ou=domain controllers,dc=systest2,dc=local": {
                                                        "name": "systest2-ou5",
                                                        "children": {
                                                            "ou=systest2-ou6,ou=systest2-ou5,ou=systest2-ou4,ou=systest2-ou3,ou=systest2-ou2,ou=systest2-ou1,ou=systest2-ou0,ou=domain controllers,dc=systest2,dc=local": {
                                                                "name": "systest2-ou6",
                                                                "children": {
                                                                    "ou=systest2-oy7,ou=systest2-ou6,ou=systest2-ou5,ou=systest2-ou4,ou=systest2-ou3,ou=systest2-ou2,ou=systest2-ou1,ou=systest2-ou0,ou=domain controllers,dc=systest2,dc=local": {
                                                                        "name": "systest2-ou7",
                                                                        "children": {
                                                                            "ou=systest2-ou8,ou=systest2-oy7,ou=systest2-ou6,ou=systest2-ou5,ou=systest2-ou4,ou=systest2-ou3,ou=systest2-ou2,ou=systest2-ou1,ou=systest2-ou0,ou=domain controllers,dc=systest2,dc=local": {
                                                                                "name": "systest2-ou8",
                                                                                "children": {
                                                                                    "ou=systest2-ou9,systest2-ou8,ou=systest2-oy7,ou=systest2-ou6,ou=systest2-ou5,ou=systest2-ou4,ou=systest2-ou3,ou=systest2-ou2,ou=systest2-ou1,ou=systest2-ou0,ou=domain controllers,dc=systest2,dc=local": {
                                                                                        "name": "systest2-ou9",
                                                                                        "children": {}
                                                                                    }                                                                        
                                                                                }
                                                                            }                                                                
                                                                        }
                                                                    }                                                        
                                                                }
                                                            }
                                                        }
                                                    } 
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "ou=systest2-ou10,ou=domain controllers,dc=systest2,dc=local": {
                "name": "systest2-ou10",
                "children": {}
            },
            "ou=systest2-ou11,ou=domain controllers,dc=systest2,dc=local": {
                "name": "systest2-ou11",
                "children": {}
            },
            "ou=systest2-ou12,ou=domain controllers,dc=systest2,dc=local": {
                "name": "systest2-ou12",
                "children": {}
            },
            "ou=systest2-ou13,ou=domain controllers,dc=systest2,dc=local": {
                "name": "systest2-ou13",
                "children": {}
            },
            "ou=systest2-ou14,ou=domain controllers,dc=systest2,dc=local": {
                "name": "systest2-ou14",
                "children": {}
            },
            "ou=systest2-ou15,ou=domain controllers,dc=systest2,dc=local": {
                "name": "systest2-ou15",
                "children": {}
            }
        }
    }
};

let systest3_tree = {
    "ou=domain controllers,dc=systest3,dc=local": {
        "name": "Domain Controllers",
        "children": {
            "ou=systest3-ou0,ou=domain controllers,dc=systest3,dc=local": {
                "name": "systest3-ou0",
                "children": {
                    "ou=systest3-ou1,ou=systest3-ou0,ou=domain controllers,dc=systest3,dc=local": {
                        "name": "systest3-ou1",
                        "children": {
                            "ou=systest3-ou4,ou=systest3-ou1,ou=systest3-ou0,ou=domain controllers,dc=systest3,dc=local": {
                                "name": "systest3-ou4",
                                "children": {}
                            },        
                        }
                    },
                    "ou=systest3-ou2,ou=systest3-ou0,ou=domain controllers,dc=systest3,dc=local": {
                        "name": "systest3-ou2",
                        "children": {}
                    },
                }
            },
            "ou=systest3-ou3,ou=domain controllers,dc=systest3,dc=local": {
                "name": "systest3-ou3",
                "children": {
                    "ou=systest3-ou5,ou=systest3-ou3,ou=domain controllers,dc=systest3,dc=local": {
                        "name": "systest3-ou5",
                        "children": {}
                    }
                }
            },
            "ou=systest3-ou6,ou=domain controllers,dc=systest3,dc=local": {
                "name": "systest3-ou6",
                "children": {}
            },
            "ou=systest3-ou7,ou=domain controllers,dc=systest3,dc=local": {
                "name": "systest3-ou7",
                "children": {}
            },
            "ou=systest3-ou8,ou=domain controllers,dc=systest3,dc=local": {
                "name": "systest3-ou8",
                "children": {}
            },
            "ou=systest3-ou9,ou=domain controllers,dc=systest3,dc=local": {
                "name": "systest3-ou9",
                "children": {}
            },
            "ou=systest3-ou10,ou=domain controllers,dc=systest3,dc=local": {
                "name": "systest3-ou10",
                "children": {}
            },
            "ou=systest3-ou11,ou=domain controllers,dc=systest3,dc=local": {
                "name": "systest3-ou11",
                "children": {}
            },
            "ou=systest3-ou12,ou=domain controllers,dc=systest3,dc=local": {
                "name": "systest3-ou12",
                "children": {}
            },
            "ou=systest3-ou13,ou=domain controllers,dc=systest3,dc=local": {
                "name": "systest3-ou13",
                "children": {}
            },
            "ou=systest3-ou14,ou=domain controllers,dc=systest3,dc=local": {
                "name": "systest3-ou14",
                "children": {}
            },
            "ou=systest3-ou15,ou=domain controllers,dc=systest3,dc=local": {
                "name": "systest3-ou15",
                "children": {}
            }
        }
    }
}

let ou_hierarchy_list = Object.assign({}, systest0_tree, systest1_tree, systest2_tree, systest3_tree);

let ldap_user_list = {};
let winrm_user_list = [];
let wl_label = 'spec, AppName, AppFunc, Region, Realm, System, custom_dimension\n';
wl_label += '10.10.10.0/24, UserApps, , Region-10, Realm-10, , \n';

// 2-layer loop of 4 systest and 6 ou
for (d_index=0; d_index<4; d_index++) {
    for (o_index=0; o_index<16; o_index++) {
        let ou = searchTree(ou_hierarchy_list, `systest${d_index}-ou${o_index}`);
        wl_label += `10.${d_index}.${o_index}.0/16, , , Region-${d_index}, Realm-${o_index}, C10x${d_index}_${o_index}_16,\n`
        for (u_index=1; u_index<=250; u_index++) {
            u_string = `systest${d_index}-ou${o_index}-u${u_index}`;
            let username = `systest${d_index}.local/${u_string}`;
            let ldap_user = `{
                "cn=${u_string},${ou}": {
                    "username": "${username}",
                    "dn": "cn=${u_string},${ou}",
                    "country": "",
                    "division": "",
                    "department": "",
                    "fullName": "${u_string}",
                    "ou": "${ou}",
                    "accountFlags": [],
                    "roles": [
                        {
                            "dn": "cn=users,cn=builtin,dc=systest${d_index},dc=local",
                            "name": "Users"
                        },
                        {
                            "dn": "cn=domain users,cn=users,dc=systest${d_index},dc=local",
                            "name": "Domain Users"
                        }
                    ]
                }
            }`;
            ldap_user_list = Object.assign(ldap_user_list, JSON.parse(ldap_user))
            let winrm_user = `{
                "username": "${u_string}",
                "domain": "SYSTEST${d_index}.LOCAL",
                "access_ip": "10.${d_index}.${o_index}.${u_index}",
                "access_fqdn": "10.${d_index}.${o_index}.${u_index}",
                "count": ${o_index},
                "last_logon": "05/05/2021 02:31:25 PM"
            }`;
            winrm_user_list.push(JSON.parse(winrm_user));
        } 
    }
}

let telemetry_ldap = {
    ou_hierarchy: ou_hierarchy_list,
    user_info: ldap_user_list
};

let telemetry_winrm = {
    users: winrm_user_list
}

if (!fs.existsSync('telemetry')) fs.mkdirSync('telemetry');
fs.writeFileSync('telemetry/telemetry_ldap.json', JSON.stringify(telemetry_ldap, null, 4));
fs.writeFileSync('telemetry/telemetry_winrm.json', JSON.stringify(telemetry_winrm, null, 4));
fs.writeFileSync('10x_net-labels.csv', wl_label);
