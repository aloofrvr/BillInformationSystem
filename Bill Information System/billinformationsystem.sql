create database billinformationsystem;

use billinformationsystem;

create table SENATOR (
Employeenumber VARCHAR(10),
Name VARCHAR(20),
Partylist VARCHAR(20),
CONSTRAINT SENATOR_Employeenumber_pk PRIMARY KEY(Employeenumber)
);

create table SENATOR_POSITION(
Employeenumber VARCHAR(10),
Position VARCHAR(20),
CONSTRAINT SENATOR_POSITION_enamepos_pk PRIMARY KEY(Employeenumber,Position)
);

create table SENATOR_COMMITTEE(
Employeenumber VARCHAR(10),
Committee VARCHAR(20),
CONSTRAINT SENATOR_POSITION_enamecom_pk PRIMARY KEY(Employeenumber,Committee)
);

create table BILL_SUBJECT(
Billno varchar(10),
Subject varchar(20),
CONSTRAINT BILL_SUBJECT_billnosubj_pk PRIMARY KEY(Billno,Subject)
);

create table HOUSEMEMBER(
Employeenumber VARCHAR(10),
Name VARCHAR(20),
Typeofrepresentative VARCHAR(20),
Partylist VARCHAR(20),
CONSTRAINT SENATOR_Employeenumber_pk PRIMARY KEY(Employeenumber)
);

create table HOUSEMEMBER_POSITION(
Employeenumber VARCHAR(10),
Position VARCHAR(20),
CONSTRAINT SENATOR_POSITION_enamepos_pk PRIMARY KEY(Employeenumber,Position)
);

create table HOUSEMEMBER_COMMITTEE(
Employeenumber VARCHAR(10),
Committee VARCHAR(20),
CONSTRAINT SENATOR_POSITION_enamecom_pk PRIMARY KEY(Employeenumber,Committee)
);

create table HOUSEMEMBER_FILES(
Employeenumber VARCHAR(10),
Billno VARCHAR(10),
Year int(4),
CONSTRAINT HMFILES_enumbillno_pk PRIMARY KEY(Employeenumber,Billno)
);

create table HOUSEMEMBER_APPROVES(
Employeenumber VARCHAR(10),
Billno VARCHAR(10),
CONSTRAINT HMFILES_enumbillno_pk PRIMARY KEY(Employeenumber,Billno)
);

create table SENATOR_FILES(
Employeenumber VARCHAR(10),
Billno VARCHAR(10),
Year int(4),
CONSTRAINT SFILES_enumbillno_pk PRIMARY KEY(Employeenumber,Billno)
);

create table SENATOR_APPROVES(
Employeenumber VARCHAR(10),
Billno VARCHAR(10),
CONSTRAINT SFILES_enumbillno_pk PRIMARY KEY(Employeenumber,Billno)
);

create table BILL(
Billno varchar(10),
Status varchar(50),
Type varchar(20),
Title varchar(50),
Summarydesc varchar(250),
Content varchar(1000),
Primarycommittee varchar(20),
Scope varchar(10),
Secondarycommittee varchar(20),
Senator_flag int(1),
Semployeenumber varchar(10),
Housemem_flag int(1),
Hemployeenumber varchar(10),
CONSTRAINT BILL_Billno_pk PRIMARY KEY(Billno),
CONSTRAINT BILL_Semployeenumber_fk FOREIGN KEY(Semployeenumber) REFERENCES SENATOR(Employeenumber),
CONSTRAINT BILL_Hemployeenumber_fk FOREIGN KEY(Hemployeenumber) REFERENCES HOUSEMEMBER(Employeenumber)
);
