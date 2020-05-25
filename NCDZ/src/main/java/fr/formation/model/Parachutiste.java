package fr.formation.model;

import java.time.LocalDate;

public class Parachutiste {
	
	
	private int numeroLicence;
	
	
	
	private String nom;
	
	
	
	private String prenom;
	
	
	
	private LocalDate dateLicence;
	
	
	
	private Parachute parachute;
	
	
	
	private Parachutiste dernierPlieur;



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
