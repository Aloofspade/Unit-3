//! autobinder 
export function Autobind(_, _2, desc) {
    const originalMethod = desc.value;
    const newMethod = {
        get() {
            return originalMethod.bind(this);
        },
    };
    return newMethod;
}
//# sourceMappingURL=autobind.js.map