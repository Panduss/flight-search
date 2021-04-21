export const uniqueObjectsSet = (data: Array<any>): any => {

    const uniqueObjectsArray = [];
    const uniqueObjectsSet = new Set()

    for (const object of data) {
        const objectJSON = JSON.stringify(object)
        if (!uniqueObjectsSet.has(objectJSON)) {
            uniqueObjectsArray.push(object)
        }
        uniqueObjectsSet.add(objectJSON)
    }

    return [...uniqueObjectsSet].map((s: any) => JSON.parse(s))
};
