/*==============================================================*/
/* DBMS name:      Microsoft SQL Server 2008                    */
/* Created on:     13/12/2016 22:59:37                          */
/*==============================================================*/


if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('HABITACIONES') and o.name = 'FK_HABITACI_REFERENCE_TIPOHABI')
alter table HABITACIONES
   drop constraint FK_HABITACI_REFERENCE_TIPOHABI
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('HABITACIONES') and o.name = 'FK_HABITACI_REFERENCE_HOTEL')
alter table HABITACIONES
   drop constraint FK_HABITACI_REFERENCE_HOTEL
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('RESERVA') and o.name = 'FK_RESERVA_REFERENCE_HABITACI')
alter table RESERVA
   drop constraint FK_RESERVA_REFERENCE_HABITACI
go

if exists (select 1
   from sys.sysreferences r join sys.sysobjects o on (o.id = r.constid and o.type = 'F')
   where r.fkeyid = object_id('RESERVA') and o.name = 'FK_RESERVA_REFERENCE_PERSONA')
alter table RESERVA
   drop constraint FK_RESERVA_REFERENCE_PERSONA
go

if exists (select 1
            from  sysobjects
           where  id = object_id('HABITACIONES')
            and   type = 'U')
   drop table HABITACIONES
go

if exists (select 1
            from  sysobjects
           where  id = object_id('HOTEL')
            and   type = 'U')
   drop table HOTEL
go

if exists (select 1
            from  sysobjects
           where  id = object_id('PERSONA')
            and   type = 'U')
   drop table PERSONA
go

if exists (select 1
            from  sysobjects
           where  id = object_id('RESERVA')
            and   type = 'U')
   drop table RESERVA
go

if exists (select 1
            from  sysobjects
           where  id = object_id('TIPOHABITACION')
            and   type = 'U')
   drop table TIPOHABITACION
go

/*==============================================================*/
/* Table: HABITACIONES                                          */
/*==============================================================*/
create table HABITACIONES (
   IDHABITACION         int                  not null,
   TIPOHABITACION       int                  null,
   IDHOTEL              int                  null,
   IDTIPO               int                  null,
   constraint PK_HABITACIONES primary key (IDHABITACION)
)
go

/*==============================================================*/
/* Table: HOTEL                                                 */
/*==============================================================*/
create table HOTEL (
   IDHOTEL              int                  not null,
   NOMBREHOTEL          varchar(20)          null,
   DIRECCIONHOTEL       varchar(30)          null,
   CANTIDADPISOS        int                  null,
   TELEFONO             int                  null,
   ANOCONSTRUCCION      int                  null,
   CATEGORIA            int                  null,
   constraint PK_HOTEL primary key (IDHOTEL)
)
go

/*==============================================================*/
/* Table: PERSONA                                               */
/*==============================================================*/
create table PERSONA (
   IDPERSONA            int                  not null,
   NOMBRE               varchar(50)          null,
   APELLIDO             varchar(50)          null,
   DIRECCION            varchar(30)          null,
   TELEFONO             int                  null,
   constraint PK_PERSONA primary key (IDPERSONA)
)
go

/*==============================================================*/
/* Table: RESERVA                                               */
/*==============================================================*/
create table RESERVA (
   IDRESERVA            int                  not null,
   PRECIO               money                null,
   FECHALLEGADA         datetime             null,
   FECHASALIDA          datetime             null,
   IDPERSONA            int                  null,
   IDHABITACION         int                  null,
   constraint PK_RESERVA primary key (IDRESERVA)
)
go

/*==============================================================*/
/* Table: TIPOHABITACION                                        */
/*==============================================================*/
create table TIPOHABITACION (
   IDTIPO               int                  not null,
   NOMBRE               varchar(30)          null,
   constraint PK_TIPOHABITACION primary key (IDTIPO)
)
go

alter table HABITACIONES
   add constraint FK_HABITACI_REFERENCE_TIPOHABI foreign key (IDTIPO)
      references TIPOHABITACION (IDTIPO)
go

alter table HABITACIONES
   add constraint FK_HABITACI_REFERENCE_HOTEL foreign key (IDHOTEL)
      references HOTEL (IDHOTEL)
go

alter table RESERVA
   add constraint FK_RESERVA_REFERENCE_HABITACI foreign key (IDHABITACION)
      references HABITACIONES (IDHABITACION)
go

alter table RESERVA
   add constraint FK_RESERVA_REFERENCE_PERSONA foreign key (IDPERSONA)
      references PERSONA (IDPERSONA)
go

