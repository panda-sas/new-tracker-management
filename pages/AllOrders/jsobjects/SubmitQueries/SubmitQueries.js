export default {
	
	OrderSubmit:  () => {
		// Insert order when submitted
		 INSERT_NEW_ORDER.run(
      () => {
				// on insert order success
				showAlert("Submitted!", "success")
				// now fetch batch
				SELECT_OPEN_ORDERS.run(
					() => closeModal('AddOrderModal'),
					() => showAlert('Something went wrong while fetching orders!')
				)
			},
     () => showAlert("Something went wrong while inserting order!", "error")
  );
	}
}