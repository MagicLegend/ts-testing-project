const Sequelize = require('sequelize');
const {sequelize} = require('../sequelize');

const Op = Sequelize.Op;

const I = sequelize.define('I', {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    i_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    i_id_parent: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    p_id: {
        type: DataTypes.INTEGER(10),
        allowNull: true,
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    version: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    tableName: 'i',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    version: true,
});

I.associate = function (models) {
    models.I.hasMany(models.I, {
        foreignKey: 'i_id_parent', as: 'subI', onDelete: 'cascade',
    });

    models.I.hasMany(models.P, {
        foreignKey: 'i_id',
        sourceKey: 'i_id',
        onDelete: 'cascade',
        as: 'iMaster',
        scope: {
            t_id: { [Op.eq]: null },
        },
    });
};

I.isInitialized = true;

exports.I = I;
