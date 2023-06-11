export default {
	
	generateS3ObjectPath(dispatcher, target) {
  // Remove spaces and other invalid characters from the inputs
  dispatcher = dispatcher ? dispatcher.replace(/\s+/g, '') : '';

  if (!dispatcher) {
    throw new Error('Dispatcher cannot be blank.');
  }

  target = target ? target.replace(/\s+/g, '') : 'unknown';

  // Get today's date in the format YYYY-MM-DD
  const today = new Date().toISOString().slice(0, 10);

  // Generate the S3 object path
  const s3ObjectPath = `plate-maps/${dispatcher}/${target}/${today}-${dispatcher}.xlsx`;

  return s3ObjectPath;
}

}