import BaseModel from './BaseModel.js'
import UserModel from './UserModel.js'
class ParticipantModel extends BaseModel {
	static tableName = 'participants'

	static relationMappings = {
		user: {
			relation: BaseModel.HasOneRelation,
			modelClass: UserModel,
			join: {
				from: 'participants.user_id',
				to: 'users.id'
			}
		}
	}


}

export default ParticipantModel