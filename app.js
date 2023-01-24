function addProduct(e) {
    e.preventDefault();
    const price = e.target.price.value
    const name = e.target.name.value
    const category = e.target.category.value
    const product = {
        price,
        name,
        category,
    }
    axios.post("https://crudcrud.com/api/34cbbbe60bc04b9f9195890b6d489d95/products", product).then((response) => {
        console.log(response)
        showProduct(response);
        window.location.reload();
    }).catch((err) => { console.log(err) })
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/34cbbbe60bc04b9f9195890b6d489d95/products")
        .then((response) => {
            showProduct(response)
        })
        .catch((err) => { console.log(err) })
})

const showProduct = (product) => {
    const elect = [];
    const foods = [];
    const skin = [];

    for (var i = 0; i < product.data.length; i++) {
        if (product.data[i].category == 'Electronics') {
            elect.push(product.data[i]);
        } else if (product.data[i].category == 'Food') {
            foods.push(product.data[i]);
        } else {
            skin.push(product.data[i]);
        }
    }

    const electronic = document.getElementById('listOfElectronic');
    const food = document.getElementById('listOfFood');
    const skincare = document.getElementById('listOfSkincare');
    const electronicChild = elect.map((val) => {
        return (
            `<tr id=${val._id}> 
    <td>${val.price}</td>
    <td>${val.name}</td>
    <td>${val.category}</td>
    <td><a class="btn btn-danger" onclick=deleteElectronic('${val._id}')>delete</td>
    </tr>`
        )
    })
    const foodChild = foods.map((val) => {
        return (
            `<tr id=${val._id}> 
    <td>${val.price}</td>
    <td>${val.name}</td>
    <td>${val.category}</td>
    <td><a class="btn btn-danger" onclick=deleteFood('${val._id}')>delete</td>
    </tr>`
        )
    })
    const skincareChild = skin.map((val) => {
        return (
            `<tr id=${val._id}> 
    <td>${val.price}</td>
    <td>${val.name}</td>
    <td>${val.category}</td>
    <td><a class="btn btn-danger" onclick=deleteSkincare('${val._id}')>delete</td>
    </tr>`
        )
    })
    electronic.innerHTML += electronicChild;
    food.innerHTML += foodChild;
    skincare.innerHTML += skincareChild;
}

const deleteElectronic = (id) => {
    axios.delete(`https://crudcrud.com/api/34cbbbe60bc04b9f9195890b6d489d95/products/${id}`).then((response) => {
        console.log(response)
    }).catch((err) => { console.log(err) })
    removeElectronicFromScreen(id)
}
const deleteFood = (id) => {
    axios.delete(`https://crudcrud.com/api/34cbbbe60bc04b9f9195890b6d489d95/products/${id}`).then((response) => {
        console.log(response)
    }).catch((err) => { console.log(err) })
    removeFoodFromScreen(id)
}
const deleteSkincare = (id) => {
    axios.delete(`https://crudcrud.com/api/34cbbbe60bc04b9f9195890b6d489d95/products/${id}`).then((response) => {
        console.log(response)
    }).catch((err) => { console.log(err) })
    removeSkincareFromScreen(id)
}

function removeElectronicFromScreen(id) {
    const electronic = document.getElementById('listOfElectronic');
    const childNodeToBeDeleted = document.getElementById(id);
    if (childNodeToBeDeleted) {
        electronic.removeChild(childNodeToBeDeleted)
    }
}

function removeFoodFromScreen(id) {
    const food = document.getElementById('listOfFood');
    const childNodeToBeDeleted = document.getElementById(id);
    if (childNodeToBeDeleted) {
        food.removeChild(childNodeToBeDeleted)
    }
}

function removeSkincareFromScreen(id) {
    const skincare = document.getElementById('listOfSkincare');
    const childNodeToBeDeleted = document.getElementById(id);
    if (childNodeToBeDeleted) {
        skincare.removeChild(childNodeToBeDeleted)
    }
}