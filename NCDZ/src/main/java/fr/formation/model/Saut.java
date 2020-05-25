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
@Table(name = "saut")
public class Saut {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int idSaut;
	
	@Column
	@NotNull
	private Vol vol;
	
	@Column
	@NotNull
	private int hauteur;
	
	@Column
	@NotNull
	private List<Integer> listParachutiste = new ArrayList<Integer>();
	
	@Column
	@NotNull
	private boolean tandem;

	//___________________________________________________________
	
	public int getIdSaut() {
		return this.idSaut;
	}
	public void setIdSaut(int idSaut) {
		this.idSaut = idSaut;
	}
	public Vol getVol() {
		return this.vol;
	}
	public void setVol(Vol vol) {
		this.vol = vol;
	}
	public int getHauteur() {
		return this.hauteur;
	}
	public void setHauteur(int hauteur) {
		this.hauteur = hauteur;
	}
	public List<Integer> getListParachutiste() {
		return this.listParachutiste;
	}
	public void setListParachutiste(List<Integer> listParachutiste) {
		this.listParachutiste = listParachutiste;
	}
	public boolean isTandem() {
		return this.tandem;
	}
	public void setTandem(boolean tandem) {
		this.tandem = tandem;
	}
	
	
	
}
