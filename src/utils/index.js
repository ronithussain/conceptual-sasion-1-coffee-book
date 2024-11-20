import toast from "react-hot-toast";

// get favorite to local storage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites');

    if (all) {
        const favorites = JSON.parse(all)
        console.log(favorites)
        return favorites;
    }
    else {
        console.log([])
        return []
    }
};

// add favorite to local storage
const addFavorite = (coffee) => {

    const favorites = getAllFavorites();
    const isExist = favorites.find(item => item.id == coffee.id)
    if (isExist) return toast.error('coffee already exists!');

    favorites.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Coffee is Successfully added!');
};

// remove a coffee from local storage
const removeFavorite = id => {
    // get all previously saved coffee data
    const favorites = getAllFavorites()
    const remaining = favorites.filter(coffee => coffee.id != id)
    localStorage.setItem('favorites', JSON.stringify(remaining));
    toast.success('Coffee is remove Successfully!');

}

export { addFavorite, getAllFavorites, removeFavorite }