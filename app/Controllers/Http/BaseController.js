'use strict'

const noData = 'Tidak ada data'

class BaseController {

    async index ({response, auth}){
        let model = await this.data.all()
        let loginAuth = await auth.user
        return response.json(
            {
                status: 200,
                userLogin: loginAuth.username,
                message: 'Behasil',
                data : model
            })
    }

    async store({request, response}){
        const req = request.all()
        const model = await this.data.create(req)
        return response.status(201).json(model)
    }

    async detail({params, response}){
        const model = await this.data.find(params.id)
        return response.json(model)
    }

    async update({params, request, response}){
        const model = await this.data.find(params.id)
        if(!model){
            return response.status(404).json({daxa: noData})
        }
        const result = await this.data.query().where('id', params.id).update(request.all())
        const berak = await this.data.find(params.id)
        return response.status(200).json({
            status : 200,
            data : berak
        })
    }

    async destroy({params, response}){
        const model = await this.data.find(params.id)
        if(!model){
            return response.status(404).json({daxa: noData})
        }
        await model.delete()
        return response.status(204).json({hasil : 'BErhasil di hapus!'})
    }
}

module.exports = BaseController
