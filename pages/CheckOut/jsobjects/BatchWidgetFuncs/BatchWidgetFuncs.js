export default {

	updateBatchDetailsContainer: () => {

		FETCH_BATCH_DETAILS.run().then((rows) => {
			TargetInputText.text = rows[0]['Target']
			LocationTextValue.text = rows[0]['Location']
			ProjectTextValue.text = rows[0]['Project']

			FETCH_ORDERS.run({orderId : rows[0]['OrderId']}).then((rows => {
				DispatcherTextValue.text = rows[0]['Dispatcher']
			}))

		})

	}
}