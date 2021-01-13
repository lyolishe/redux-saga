const putLocalStorage = (store: any) => (next: any) => (action: any) => {
    let result = next(action);

    localStorage.setItem('store', JSON.stringify(store.getState()));

    return result;
};

export default putLocalStorage;