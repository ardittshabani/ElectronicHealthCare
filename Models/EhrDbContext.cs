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

        public virtual DbSet<Mjeku> Mjekus { get; set; } = null!;
        public virtual DbSet<Pacienti> Pacientis { get; set; } = null!;
        public virtual DbSet<Perdoruesi> Perdoruesis { get; set; } = null!;

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
            modelBuilder.Entity<Mjeku>(entity =>
            {
                entity.ToTable("Mjeku");

                entity.Property(e => e.MjekuId)
                    .ValueGeneratedNever()
                    .HasColumnName("mjekuID");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Emri)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("emri");

                entity.Property(e => e.Gjinia)
                    .HasMaxLength(8)
                    .IsUnicode(false)
                    .HasColumnName("gjinia");

                entity.Property(e => e.Mbiemri)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("mbiemri");

                entity.Property(e => e.NrTelefonit).HasColumnName("nrTelefonit");

                entity.Property(e => e.Qyteti)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("qyteti");

                entity.Property(e => e.Rruga)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("rruga");

                entity.Property(e => e.Specializimi)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("specializimi");

                entity.Property(e => e.Statusi)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("statusi");

                entity.Property(e => e.ZipKodi).HasColumnName("zipKodi");

                entity.HasOne(d => d.MjekuNavigation)
                    .WithOne(p => p.Mjeku)
                    .HasForeignKey<Mjeku>(d => d.MjekuId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Mjeku__mjekuID__4CA06362");
            });

            modelBuilder.Entity<Pacienti>(entity =>
            {
                entity.ToTable("Pacienti");

                entity.Property(e => e.PacientiId)
                    .ValueGeneratedNever()
                    .HasColumnName("pacientiID");

                entity.Property(e => e.Email)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("email");

                entity.Property(e => e.Emri)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("emri");

                entity.Property(e => e.Gjatesia).HasColumnName("gjatesia");

                entity.Property(e => e.Gjinia)
                    .HasMaxLength(8)
                    .IsUnicode(false)
                    .HasColumnName("gjinia");

                entity.Property(e => e.GrupiGjakut)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasColumnName("grupiGjakut");

                entity.Property(e => e.Mbiemri)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("mbiemri");

                entity.Property(e => e.NrTelefonit).HasColumnName("nrTelefonit");

                entity.Property(e => e.Pesha).HasColumnName("pesha");

                entity.Property(e => e.Qyteti)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("qyteti");

                entity.Property(e => e.Rruga)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("rruga");

                entity.Property(e => e.ZipKodi).HasColumnName("zipKodi");

                entity.HasOne(d => d.PacientiNavigation)
                    .WithOne(p => p.Pacienti)
                    .HasForeignKey<Pacienti>(d => d.PacientiId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Pacienti__pacien__48CFD27E");
            });

            modelBuilder.Entity<Perdoruesi>(entity =>
            {
                entity.ToTable("Perdoruesi");

                entity.Property(e => e.PerdoruesiId).HasColumnName("perdoruesiID");

                entity.Property(e => e.Pasword)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("pasword");

                entity.Property(e => e.Username)
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("username");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
