

export const pathsPublic: { [k:string]: string } = {
    home: '/',
    productDetails: '/product/:idOrSlug',
}

export const pathsPrivate: { [k:string]: string } = {
    accountSettings: '/account-settings',
}

export const paths: { [k:string]: string } = Object.assign({}, pathsPublic, pathsPrivate)


// export const checkPathMatch = (
//     pathname: string,
//     paths: { [k:string]: string },
// ) => {
//     let isMatch = false

//     const allPaths = Object.keys(paths).map((k) => paths[k])
//     const pathFirstSection = pathname.split('/')[1]

//     allPaths.forEach((p) => {
//      if(p.slice(1) === pathFirstSection) isMatch = true 
       
     
//     })

//     return isMatch
// }


export const checkPathMatch = (
    pathname: string,
    paths: { [k:string]: string },
) => {
    // Простая проверка - если путь начинается с известного префикса
    const allPaths = Object.keys(paths).map((k) => paths[k])
    
    return allPaths.some((path) => {
        if (path.includes(':')) {
            // Для путей с параметрами, проверяем префикс
            const pathPrefix = path.split('/:')[0]
            return pathname.startsWith(pathPrefix)
        } else {
            // Для обычных путей точное совпадение
            return pathname === path
        }
    })
}