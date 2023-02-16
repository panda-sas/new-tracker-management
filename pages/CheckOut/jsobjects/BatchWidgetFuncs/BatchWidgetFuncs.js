export default {

	updateBatchDetailsContainer: async () => {
		
		await FETCH_BATCH_DETAILS.run();
		let batchData = FETCH_BATCH_DETAILS.data[0]
		
		await FETCH_ORDERS.run({orderId : batchData['OrderId']})
		let orderData = FETCH_ORDERS.data[0]
		
		/* Update labels*/
		TargetInputText.text = batchData['Target']
		LocationTextValue.text = batchData['Location']
		ProjectTextValue.text = batchData['Project']
		DispatcherTextValue.text = orderData['Dispatcher']
	}
}