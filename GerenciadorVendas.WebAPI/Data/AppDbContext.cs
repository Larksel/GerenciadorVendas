﻿using GerenciadorVendas.WebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace GerenciadorVendas.WebAPI.Context;

public class AppDbContext : DbContext
{
	public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) {}

	public DbSet<Venda> Vendas { get; set; } = null!;
}
