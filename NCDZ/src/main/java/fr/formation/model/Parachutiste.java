package fr.formation.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Table(name = "parachutiste")
@Entity
public class Parachutiste {
	
	@Id
	private int numeroLicence;
	
	
	@Column
	@NotNull
	private String nom;
	
	
	@Column
	@NotNull
	private String prenom;
	
	
	@Column
	@NotNull
	private LocalDate dateLicence;
	
	
	@JoinColumn(name = "idParachute")
	@ManyToOne
	private Parachute parachute;
	
	
	@Column
	@OneToOne
	private Parachutiste dernierPlieur;

	
	//______________________________________________________________________
	
	
	
	public int getNumeroLicence() {
		return numeroLicence;
	}



	public void setNumeroLicence(int numeroLicence) {
		this.numeroLicence = numeroLicence;
	}



	public String getNom() {
		return nom;
	}



	public void setNom(String nom) {
		this.nom = nom;
	}



	public String getPrenom() {
		return prenom;
	}



	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}



	public LocalDate getDateLicence() {
		return dateLicence;
	}



	public void setDateLicence(LocalDate dateLicence) {
		this.dateLicence = dateLicence;
	}



	public Parachute getParachute() {
		return parachute;
	}



	public void setParachute(Parachute parachute) {
		this.parachute = parachute;
	}



	public Parachutiste getDernierPlieur() {
		return dernierPlieur;
	}



	public void setDernierPlieur(Parachutiste dernierPlieur) {
		this.dernierPlieur = dernierPlieur;
	}
	
	
}
