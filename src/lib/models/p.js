module.exports = (sequelize, DataTypes) => {
    const P = sequelize.define('P', {
        id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        a: {
            type: DataTypes.INTEGER(10),
            allowNull: true,
        },
        t_id: {
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
    }, {
        tableName: 'p',
        timestamps: true,
        version: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });

    P.associate = (models) => {
        models.P.belongsTo(models.I, { sourceKey: 'i_id', foreignKey: 'i_id', as: 'i' });
    };

    return P;
};
