export default {

	updateBatchDetailsContainer: async () => {
		
		await FETCH_CHECKOUT.run();
		let checkoutData = FETCH_CHECKOUT.data[0]
		
		await FETCH_BATCH_DETAILS.run();
		let batchData = FETCH_BATCH_DETAILS.data[0]
		
		await FETCH_ORDERS.run({orderId : batchData['OrderId']})
		let orderData = FETCH_ORDERS.data[0]
		
		/* Update labels*/
		TargetInputText.text = batchData['Target']
		LocationTextValue.text = batchData['Location']
		ProjectTextValue.text = batchData['Project']
		DispatcherTextValue.text = orderData['Dispatcher']
		ReturnSwitch.isSwitchedOn = checkoutData['IsReturned']
		ResultSwitch.isSwitchedOn = checkoutData['IsResultedUploadedToCDD']
		ReviewedSwitch.isSwitchedOn = checkoutData['IsReviewed']
		PurposeInputText.inputText = checkoutData['Purpose']
		ReturnDate.formattedDate = checkoutData['ActualReturnDate']
		CDDUrlInputText.inputText = checkoutData['CDDResultURL']
		CommentsInputText.inputText = checkoutData['Comments']
		ReviewerInputSelect.selectedOptionValue = checkoutData['Reviewer']
		ReviewDate.formattedDate = {{moment(checkoutData['ReviewDate']).}}
	}
}