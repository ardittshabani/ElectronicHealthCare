using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ElectronicHealthCare.Models
{
    public partial class EhrDbContext : DbContext
    {
        public EhrDbContext()
        {
        }

        public EhrDbContext(DbContextOptions<EhrDbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Diagnoza> Diagnozas { get; set; } = null!;
        public virtual DbSet<Mjeku> Mjekus { get; set; } = null!;
        public virtual DbSet<Pacienti> Pacientis { get; set; } = null!;
        public virtual DbSet<Termini> Terminis { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=DESKTOP-35D4BLL;Database=EhrDb;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Diagnoza>(entity =>
            {
                entity.ToTable("Diagnoza");

                entity.Property(e => e.DiagnozaId).HasColumnName("DiagnozaID");

                entity.Property(e => e.MjekuId).HasColumnName("MjekuID");

                entity.Property(e => e.PacientiId).HasColumnName("PacientiID");

                entity.HasOne(d => d.Mjeku)
                    .WithMany(p => p.DiagnozaMjekus)
                    .HasForeignKey(d => d.MjekuId)
                    .HasConstraintName("FK__Diagnoza__MjekuI__4D94879B");

                entity.HasOne(d => d.Pacienti)
                    .WithMany(p => p.DiagnozaPacientis)
                    .HasForeignKey(d => d.PacientiId)
                    .HasConstraintName("FK__Diagnoza__Pacien__4E88ABD4");
            });

            modelBuilder.Entity<Mjeku>(entity =>
            {
                entity.ToTable("Mjeku");

                entity.Property(e => e.MjekuId).HasColumnName("MjekuID");

                entity.Property(e => e.DataLindjes).HasColumnType("date");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Emri)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Mbiemri)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Pacienti>(entity =>
            {
                entity.ToTable("Pacienti");

                entity.Property(e => e.PacientiId).HasColumnName("PacientiID");

                entity.Property(e => e.DataLindjes).HasColumnType("date");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Emri)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Mbiemri)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Termini>(entity =>
            {
                entity.ToTable("Termini");

                entity.Property(e => e.TerminiId).HasColumnName("TerminiID");

                entity.Property(e => e.DataTerminit).HasColumnType("date");

                entity.Property(e => e.MjekuId).HasColumnName("MjekuID");

                entity.Property(e => e.PacientiId).HasColumnName("PacientiID");

                entity.HasOne(d => d.Mjeku)
                    .WithMany(p => p.TerminiMjekus)
                    .HasForeignKey(d => d.MjekuId)
                    .HasConstraintName("FK__Termini__MjekuID__5165187F");

                entity.HasOne(d => d.Pacienti)
                    .WithMany(p => p.TerminiPacientis)
                    .HasForeignKey(d => d.PacientiId)
                    .HasConstraintName("FK__Termini__Pacient__52593CB8");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
