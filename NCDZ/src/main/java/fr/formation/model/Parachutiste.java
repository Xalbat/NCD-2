package fr.formation.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonView;

import fr.formation.enumerator.Niveau;
import fr.formation.projection.Views;

@Entity
@Table(name = "parachutiste")
public class Parachutiste {
	
	@Id
	@Column(name = "numero_licence")
	@JsonView({Views.Common.class, Views.Vol.class})
	private int numeroLicence;
	
	@Column(name = "nom", nullable = false, length = 25)
	@JsonView(Views.Common.class)
	private String nom;
	
	@Column(name = "prenom", nullable = false, length = 25)
	@JsonView(Views.Parachutiste.class)
	private String prenom;
	
	@Column(name = "niveau", nullable = false, length = 25)
	@Enumerated(EnumType.STRING)
	@JsonView(Views.Parachutiste.class)
	private Niveau niveau;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(name = "date_visite")
	@JsonFormat(pattern = "yyyy-MM-dd")
	@JsonView(Views.Parachutiste.class)
	private LocalDate dateLicence;
	
	@ManyToOne
	@JoinColumn(name = "id_parachute")
	@JsonView({Views.Parachutiste.class, Views.Vol.class})
	private Parachute parachute;

	
	
	
	public Parachutiste() {}
	
	// -----------   Getter Setter -------------- //
	


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
	
}
