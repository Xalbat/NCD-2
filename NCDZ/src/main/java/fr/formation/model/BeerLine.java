package fr.formation.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;



@Entity
@Table(name = "beerLine")
public class BeerLine {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idBeerLine;
	
	@Column
	@NotNull
	private Saut saut;
	
	@Column
	@NotNull
	private Parachutiste parachutiste;
	

	//___________________________________________________________
	

	public int getIdBeerLine() {
		return idBeerLine;
	}
	public void setIdBeerLine(int idBeerLine) {
		this.idBeerLine = idBeerLine;
	}
	public Saut getVol() {
		return this.saut;
	}
	public void setVol(Saut saut) {
		this.saut = saut;
	}
	public Parachutiste getParachutiste() {
		return this.parachutiste;
	}
	public void setParachutiste(Parachutiste parachutiste) {
		this.parachutiste = parachutiste;
	}
	
	
	
	
}
