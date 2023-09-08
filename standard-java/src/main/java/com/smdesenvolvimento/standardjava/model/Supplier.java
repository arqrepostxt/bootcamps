    package com.smdesenvolvimento.standardjava.model;


    import javax.persistence.*;

    @Entity
    @Table(name = "tab_supplier")
    public class Supplier {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer id;

        @Column(name = "supplier_name")
        private String name;

        @Column(name = "supplier_email")
        private String email;

        @Column(name = "supplier_phone")
        private String phone;

        @Column(name = "supplier_address")
        private String address;

        @Column(name = "supplier_city")
        private String city;
        // Constructors, getters, and setters

        public Supplier(int id, String name, String email, String phone, String address, String city) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.address = address;
            this.city = city;

        }

        public Supplier() {

        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }

        public String getPhone() {
            return phone;
        }

        public void setPhone(String phone) {
            this.phone = phone;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }
    }