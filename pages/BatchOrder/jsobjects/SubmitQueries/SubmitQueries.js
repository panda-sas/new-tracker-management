export default {
	
	BatchSubmit:  () => {
		// Insert batch when submitted
		 INSERT_BATCH.run(
      () => {
				// on insert batch success
				showAlert("Submitted!", "success")
				// now fetch batch
				FETCH_BATCH.run(
					() => closeModal('AddNewBatchModal'),
					() => showAlert('Something went wrong while fetching batch!')
				)
			},
     () => showAlert("Something went wrong while inserting record!", "error")
  );
	}
}