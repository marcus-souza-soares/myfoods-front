import Swal from 'sweetalert2';
import { deleteRevenueById } from '../services/requests';

export const alert = (type, title, text) => {
  return Swal.fire({
    icon: type,
    title: title,
    text: text,
  });
};

export const confirm = (title, text, icon, id) => {

  let goToHome = false;

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText: 'Sim, deletar',
    cancelButtonText: 'Não, cancelar',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      console.log(id);
      deleteRevenueById(id).then(() => {
        console.log("Ok");
        goToHome = !goToHome;
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Sua receita foi deletada!',
          'success'
        );
      }).catch(e => {
        console.log(e);
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire(
        'Cancelled',
        'Ação desfeita :)',
        'error'
      );
    }
  })
  return goToHome;
}