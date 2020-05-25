package fr.formation.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "Revision")
public class Revision {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name = "date_dernier_pliage_primaire", nullable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate datePliagePrimaire;
	
	@ManyToOne
	@JoinColumn(name = "plieur_voile_primaire", nullable = false)
	private Parachutiste plieurVoilePrimaire;
	
	@Column(name = "date_dernier_pliage_secours", nullable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")	
	private LocalDate datePliageSecours;
	
	@ManyToOne
	@JoinColumn(name = "plieur_voile_secours", nullable = false)
	private Parachutiste plieurVoileSecours;
	
	
	
	// -----------   Getter Setter -------------- //
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public LocalDate getDatePliagePrimaire() {
		return datePliagePrimaire;
	}

	public void setDatePliagePrimaire(LocalDate datePliagePrimaire) {
		this.datePliagePrimaire = datePliagePrimaire;
	}

	public Parachutiste getPlieurVoilePrimaire() {
		return plieurVoilePrimaire;
	}

	public void setPlieurVoilePrimaire(Parachutiste plieurVoilePrimaire) {
		this.plieurVoilePrimaire = plieurVoilePrimaire;
	}

	public LocalDate getDatePliageSecours() {
		return datePliageSecours;
	}

	public void setDatePliageSecours(LocalDate datePliageSecours) {
		this.datePliageSecours = datePliageSecours;
	}

	public Parachutiste getPlieurVoileSecours() {
		return plieurVoileSecours;
	}

	public void setPlieurVoileSecours(Parachutiste plieurVoileSecours) {
		this.plieurVoileSecours = plieurVoileSecours;
	}

	
	
	
	
}
