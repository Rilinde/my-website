function toggleSubmenu(event) {
  event.preventDefault();
  const parent = event.target.closest('li'); // Ensure we get the <li>
  parent.classList.toggle('open');
}



function toggleNestedSubmenu(event){

    event.stopPropagation(); // Prevent parent Qualification from toggling
    const li = event.target.closest('li');
    li.classList.toggle("open")
}


function openCert1(certificate1) {
    window.open(certificate1, '_blank');
}

function openCert2(certificate2) {
    window.open(certificate2, '_blank');
}