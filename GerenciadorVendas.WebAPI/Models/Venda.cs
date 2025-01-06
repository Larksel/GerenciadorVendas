using System.ComponentModel.DataAnnotations.Schema;

namespace GerenciadorVendas.WebAPI.Models;

[Table("venda")]
public class Venda
{
	[Column("id")]
	public int Id { get; set; }

	[Column("produto")]
	public string Produto { get; set; }

	[Column("quantidade")]
	public int Quantidade { get; set; }
	
	[Column("valorunit")]
	public double ValorUnit { get; set; }

	[Column("valortotal")]
	public double ValorTotal { get; set; }

	public Venda(int id, string produto, int quantidade, double valorUnit, double valorTotal)
	{
		Id = id;
		Produto = produto;
		Quantidade = quantidade;
		ValorUnit = valorUnit;
		ValorTotal = valorTotal;
	}
}
