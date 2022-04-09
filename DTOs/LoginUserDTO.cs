﻿using System.ComponentModel.DataAnnotations;

namespace FindJobWebApi.DTOs
{
    public class LoginUserDTO
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MinLength(6)]
        [MaxLength(16)]
        public string Password { get; set; }
    }
}
