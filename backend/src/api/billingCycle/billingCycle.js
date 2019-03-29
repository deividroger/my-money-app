const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, require:[true, 'Informe o valor do crédito']   },
    value: { type:Number, min:1, require:true }
} )

const debtSchema = new mongoose.Schema({
    name: { type: String, require: true  },
    value: { type:Number, min:1, require:[true, 'Informe o valor do débito'] },
    status: { type: String, require:false, uppercase: true, enum: ['PAGO','PENDENTE','AGENDADO'] }

})

const billingCycleSchema = new mongoose.Schema({
    name: {type: String, require:true },
    month: {type: Number, require:true},
    year: {type:Number,min:1970, max:2100, require:true},
    credits: [creditSchema],
    debts: [debtSchema]

})

module.exports = restful.model('BillingCycle',billingCycleSchema)