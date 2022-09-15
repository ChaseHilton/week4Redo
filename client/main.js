const getURL = 'http://localhost:4000';

const complimentBtn = document.getElementById('complimentButton');
const getClosetBtn = document.getElementById('getCloset');
const closetShelve = document.getElementById('displayCloset');
const addForm = document.getElementById('addForm');
const addInput = document.getElementById('addInput');
const deleteForm = document.getElementById('deleteForm');
const deleteInput = document.getElementById('deleteInput');
const editForm = document.getElementById('editForm');
const editIndex = document.getElementById('editIndex');
const editInput = document.getElementById('editInput');

const getCompliment = () => {
  axios.get('http://localhost:4000/api/compliment/').then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getCloset = () => {
  axios
    .get(`${getURL}/api/closet`)
    .then((res) => {
      console.log(res.data);
      const closet = res.data;
      closetShelve.innerHTML = '';

      for (let i = 0; i < closet.length; i++) {
        let newDrip = document.createElement('li');
        newDrip.textContent = closet[i];
        closetShelve.appendChild(newDrip);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const addNewDrip = (event) => {
  event.preventdefault();

  let bodyObject = {
    item: addInput.value,
  };

  axios
    .post(`${getURL}/api/addDrip`, bodyObject)
    .then((res) => {
      console.log(res.data);
      const closet = res.data;
      closetShelve.innerHTML = '';

      for (let i = 0; i < closet.length; i++) {
        let newDrip = document.createElement('li');
        newDrip.textContent = closet[i];
        closetShelve.appendChild(newDrip);
      }

      addInput.value = '';
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteItem = (event) => {
  event.preventdefault();

  axios.delete(`${getURL}/api/deleteDrip/${deleteInput.value}`).then((res) => {
    const closet = res.data;
    closetShelve.innerHTML = '';

    for (let i = 0; i < closet.length; i++) {
      let newDrip = document.createElement('li');
      newDrip.textContent = closet[i];
      closetShelve.appendChild(newDrip);
    }
  });
};

const editItem = (event) => {
  event.preventdefault();

  let bodyObject = {
    item: editInput.value,
  };

  axios
    .put(`${getURL}/api/editDrip/${editIndex.value}`, bodyObject)
    .then((res) => {
      const closet = res.data;
      closetShelve.innerHTML = '';

      for (let i = 0; i < closet.length; i++) {
        let newDrip = document.createElement('li');
        newDrip.textContent = closet[i];
        closetShelve.appendChild(newDrip);
      }
      editIndex.value = '';
      editInput.value = '';
    });
};

complimentBtn.addEventListener('click', getCompliment);
getClosetBtn.addEventListener('click', getCloset);
addForm.addEventListener('submit', addNewDrip);
deleteForm.addEventListener('submit', deleteItem);
editForm.addEventListener('submit', editItem);
