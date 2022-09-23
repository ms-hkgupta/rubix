const typeMap:Record<string,string> = {
    'textField': 'fluent-text-field',
    'button': 'fluent-button',
    'checkbox': 'fluent-checkbox',
    'card': 'fluent-card',
    'container': 'aw-container'
}

export function getTypeMap(type: string){
    return typeMap[type] ?? type;
}
