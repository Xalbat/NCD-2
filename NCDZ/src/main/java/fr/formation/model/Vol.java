package fr.formation.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="vol")
public class Vol {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	private int id;
	
	@ManyToOne
	@Column(name="pilote")
	private Pilote pilote;
	
	@OneToOne
	@Column(name="avion")
	private Avion avion;
	
	@Column(name="situation_vol")
	private SituationVol situationVol;
	
	@OneToOne
	@Column(name="id_respo_vol")
	private Parachutiste respoVol;
	
	@ManyToOne
	@Column(name="id_respo_sol")
	private Parachutiste respoSol;
	
	@Column(name = "date", nullable = false)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Pilote getPilote() {
		return pilote;
	}

	public void setPilote(Pilote pilote) {
		this.pilote = pilote;
	}

	public Avion getAvion() {
		return avion;
	}

	public void setAvion(Avion avion) {
		this.avion = avion;
	}

	public SituationVol getSituationVol() {
		return situationVol;
	}

	public void setSituationVol(SituationVol situationVol) {
		this.situationVol = situationVol;
	}

	public Parachutiste getRespoVol() {
		return respoVol;
	}

	public void setRespoVol(Parachutiste respoVol) {
		this.respoVol = respoVol;
	}

	public Parachutiste getRespoSol() {
		return respoSol;
	}

	public void setRespoSol(Parachutiste respoSol) {
		this.respoSol = respoSol;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}
	
	
	
	

}
