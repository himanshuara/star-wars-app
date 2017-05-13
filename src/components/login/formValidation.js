export default function formValidation(data){
	var errors="0";
	if(!data.userName || !data.password){
		errors = "1"
	}
	return errors
}