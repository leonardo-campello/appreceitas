import AsyncStorage from '@react-native-async-storage/async-storage'

export async function getFavorites(key) {
    const favorites = await AsyncStorage.getItem(key)
    return JSON.parse(favorites) || [];
}

export async function saveFavorite(key, newItem) {
    let myFavorite = await getFavorites(key)

    let hasItem = myFavorite.some( item => item.id === newItem.id)

    if(hasItem) {
        console.log('Esse item já está salvo na lista')
        return;
    }

    myFavorite.push(newItem)
    await AsyncStorage.setItem(key, JSON.stringify(myFavorite))
    console.log('Salvo com sucesso')
}

export async function removeItem(id) {
    let receipes = await getFavorites('@appreceitas')

    let myFavorite = receipes.filter( item => {
        return ( item.id !== id)
    })

    await AsyncStorage.setItem('@appreceitas', JSON.stringify(myFavorite));
    console.log('Item deletado com sucesso');
    return myFavorite;
}

export async function isFavorite(receipe) {
    let myReceipes = await getFavorites('@appreceitas')

    const favorite = myReceipes.find( item => item.id === receipe.id)

    if(favorite){
        return true;
    }

    return false;
}