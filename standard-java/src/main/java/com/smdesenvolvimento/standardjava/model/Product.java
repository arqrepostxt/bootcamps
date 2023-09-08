package com.smdesenvolvimento.standardjava.model;


import javax.persistence.*;

@Entity
@Table(name = "tab_product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name="product_title")
    private String title;

    @Column(name = "product_price")
    private double price;

    @Column(name = "product_color")
    private String color;

    @Column(name = "product_size")
    private String size;

    @Column(name = "product_stocked")
    private int stocked;

    @ManyToOne
    @JoinColumn(name = "supplier_id")
    private Supplier supplier;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    public Product(int id, String title, double price, String color, String size, int stocked, Supplier supplier, Category category) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.color = color;
        this.size = size;
        this.stocked = stocked;
        this.supplier = supplier;
        this.category = category;

    }

    public Product() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public int getStocked() {
        return stocked;
    }

    public void setStocked(int stocked) {
        this.stocked = stocked;
    }

    public Supplier getSupplier() {
        return supplier;
    }

    public void setSupplier(Supplier supplier) {
        this.supplier = supplier;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}