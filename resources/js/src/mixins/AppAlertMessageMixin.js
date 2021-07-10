import { mapActions } from "vuex";

export default 
{
    methods : 
    {
        ...mapActions(
            alertMessage, 
            [
                'showAlertMessage', 
                'destroyAlertMessage'
            ]
        )
    }
}