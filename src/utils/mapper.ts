const typeMap:Record<string,string> = {
    'textField': 'fluent-text-field',
    'button': 'fluent-button',
    'checkbox': 'fluent-checkbox',
    'card': 'fluent-card',
    'container': 'rbx-container'
}

export function getTypeMap(type: string){
    return typeMap[type] ?? type;
}
