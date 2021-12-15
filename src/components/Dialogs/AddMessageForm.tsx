import React from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, getStringKeys, Textarea} from '../common/FormsControl/FormsControl'
import {maxLengthCreator, required} from '../../utils/validators'
import {NewMessageFormType} from "./Dialogs";

const maxLength100 = maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormType, PropsType> & PropsType> =
    (props) => {
        return (
            <form onSubmit={props.handleSubmit}>
                {createField<NewMessageFormKeysType>('Message Text', "newMessageBody", Textarea, [required, maxLength100], null)}
                <button>Send</button>
            </form>
        )
    }

export default reduxForm<NewMessageFormType, PropsType>({form: 'dialogAddMessageForm'})(AddMessageForm)

type NewMessageFormKeysType = getStringKeys<NewMessageFormType>
type PropsType = {}